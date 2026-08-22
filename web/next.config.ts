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
  // NOTE: the HTML variant of the markdown-negotiated routes (acceptmarkdown.com,
  // see proxy.ts) cannot be given Vary: Accept on this stack — a headers() entry
  // here, a proxy-set header, and vercel.json headers ALL lose to Next's own RSC
  // Vary on prerendered HTML responses (each verified against the live deploy).
  // The vercel.json entry is kept as best-effort. Harmless in practice: the
  // markdown responses do carry Vary: Accept, and the proxy negotiates before
  // Vercel's CDN cache, so variants can't be miscached there.
};

export default withMDX(nextConfig);
