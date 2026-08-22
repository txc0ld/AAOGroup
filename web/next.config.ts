import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // remark-frontmatter strips the YAML --- block so it isn't rendered as body text.
    remarkPlugins: ["remark-frontmatter", "remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      ["rehype-autolink-headings", { behavior: "wrap" }],
    ],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  trailingSlash: true,
  // NOTE: do NOT set outputFileTracingRoot here — on Vercel it conflicts with
  // the monorepo build (root .next vs web/.next) and fails the deploy with a
  // missing routes-manifest-deterministic.json. The "both set, must match"
  // warning is cosmetic; leave it.
  turbopack: {
    root: __dirname,
  },
  // The proxy negotiates these URLs between text/html and text/markdown
  // (acceptmarkdown.com), so caches must key on Accept for BOTH variants. The
  // proxy sets Vary on the markdown rewrite; the HTML variant gets it here.
  // The value is the union of Next's own RSC vary keys + Accept because
  // Vercel's routing layer applies configured headers with precedence — a
  // bare "Accept" could strip the RSC keys and poison the CDN cache. Local
  // `next start` ignores this (its renderer emits its own Vary); the header
  // is effective on Vercel.
  async headers() {
    const vary = "rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, Accept";
    return [
      { source: "/", headers: [{ key: "Vary", value: vary }] },
      { source: "/articles/:path*", headers: [{ key: "Vary", value: vary }] },
    ];
  },
};

export default withMDX(nextConfig);
