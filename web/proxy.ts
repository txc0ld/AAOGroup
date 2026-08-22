import { NextResponse, type NextRequest } from "next/server";
import { ARTICLE_SLUGS } from "@/app/articles/slugs.generated";

// Markdown content negotiation (acceptmarkdown.com) + agent-friendly 404s.
//
// Routes with a Markdown twin in public/ serve it when the client's Accept
// header ranks text/markdown above text/html (q-value, then specificity).
// Both variants of a negotiated URL carry `Vary: Accept` so caches key on it.
// Unknown paths return a 404 with a short Markdown recovery body to clients
// that prefer Markdown; everyone else falls through to the HTML 404 page.

const SITE = "https://operateai.com.au";

// Path (no trailing slash, "" = root) → Markdown twin in public/.
function markdownTwinFor(path: string): string | null {
  if (path === "") return "/index.md";
  if (path === "articles") return "/articles/index.md";
  const article = path.match(/^articles\/([a-z0-9-]+)$/);
  if (article && ARTICLE_SLUGS.includes(article[1])) return `/articles/${article[1]}.md`;
  return null;
}

// Every route shape the app can serve. Unknown-slug dynamic routes still fall
// through to Next's own 404 — this list only decides who renders the 404.
const KNOWN_ROUTES: RegExp[] = [
  /^$/,
  /^(check|ioagent|websites|done-for-you|how-it-works|about|contact|articles|ai-visibility|opengraph-image)$/,
  /^legal\/(privacy|terms)$/,
  /^articles\/[a-z0-9-]+(\/opengraph-image)?$/,
  /^ai-visibility\/[a-z0-9-]+(\/[a-z0-9-]+)?$/,
];

type MediaMatch = { q: number; specificity: number };

// Best match for `type/subtype` among the Accept header's media ranges.
// Per RFC 9110 the most specific matching range determines q; q=0 excludes.
function acceptScore(accept: string, type: string, subtype: string): MediaMatch | null {
  let best: MediaMatch | null = null;
  for (const part of accept.split(",")) {
    const [range, ...params] = part.trim().split(";");
    const [t = "", s = ""] = range.trim().toLowerCase().split("/");
    if (!t || !s) continue;
    const matches = (t === "*" || t === type) && (s === "*" || s === subtype);
    if (!matches) continue;
    let q = 1;
    for (const p of params) {
      const [key, value] = p.trim().split("=");
      if (key.trim() === "q") {
        const n = parseFloat(value);
        if (!Number.isNaN(n)) q = Math.min(Math.max(n, 0), 1);
      }
    }
    const specificity = t === "*" ? 0 : s === "*" ? 1 : 2;
    if (!best || specificity > best.specificity || (specificity === best.specificity && q > best.q)) {
      best = { q, specificity };
    }
  }
  return best && best.q > 0 ? best : null;
}

function prefersMarkdown(md: MediaMatch | null, html: MediaMatch | null): md is MediaMatch {
  if (!md) return false;
  if (!html) return true;
  return md.q > html.q || (md.q === html.q && md.specificity > html.specificity);
}

const NOT_FOUND_MARKDOWN = `# 404 — Page not found

Nothing lives at this path on operateai.com.au.

## Where to look next

- Site overview for agents: ${SITE}/llms.txt
- Site map: ${SITE}/sitemap.xml
- Articles index (Markdown): ${SITE}/articles/index.md
- Homepage: ${SITE}/ — also serves Markdown via \`Accept: text/markdown\`
- Free AI Visibility Check: ${SITE}/check/
- Contact: team@operateai.com.au
`;

export function proxy(request: NextRequest) {
  // Negotiate document GETs only. This keeps Server Action POSTs (Accept:
  // text/x-component) clear of the 406 branch. Next strips RSC flight headers
  // before the proxy runs and RSC fetches send no explicit Accept, so they
  // tie at */* and fall through to HTML on their own.
  if (request.method !== "GET" && request.method !== "HEAD") {
    return NextResponse.next();
  }

  const path = request.nextUrl.pathname.replace(/\/+$/, "").replace(/^\//, "");
  const accept = request.headers.get("accept") ?? "*/*";
  const md = acceptScore(accept, "text", "markdown");
  const html = acceptScore(accept, "text", "html");
  const twin = markdownTwinFor(path);

  if (twin) {
    // Negotiated URL: unsupported Accept → 406, per acceptmarkdown.com.
    if (!md && !html) {
      return new NextResponse("406 Not Acceptable. This URL serves text/html or text/markdown.\n", {
        status: 406,
        headers: { "Content-Type": "text/plain; charset=utf-8", Vary: "Accept" },
      });
    }
    if (prefersMarkdown(md, html)) {
      const url = request.nextUrl.clone();
      url.pathname = twin;
      const response = NextResponse.rewrite(url);
      response.headers.set("Content-Type", "text/markdown; charset=utf-8");
      response.headers.set("Vary", "Accept");
      return response;
    }
    const response = NextResponse.next();
    response.headers.set("Vary", "Accept");
    return response;
  }

  if (!KNOWN_ROUTES.some((r) => r.test(path)) && prefersMarkdown(md, html)) {
    return new NextResponse(NOT_FOUND_MARKDOWN, {
      status: 404,
      headers: { "Content-Type": "text/markdown; charset=utf-8", Vary: "Accept" },
    });
  }

  return NextResponse.next();
}

export const config = {
  // Skip API routes, Next internals, and anything with a file extension —
  // static files (.md twins included) are served as-is, unnegotiated.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
