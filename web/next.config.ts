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
  // NOTE: Vary: Accept for the HTML variant of the markdown-negotiated routes
  // (acceptmarkdown.com, see proxy.ts) lives in vercel.json — both a headers()
  // entry here and a proxy-set header get clobbered by Next's own RSC Vary on
  // HTML page responses (verified against next start and the live deploy).
};

export default withMDX(nextConfig);
