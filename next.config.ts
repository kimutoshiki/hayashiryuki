import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// On GitHub Pages, the site will be served from `/hayashiryuki/`.
// Allow override with NEXT_PUBLIC_BASE_PATH for other deploy targets.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? "/hayashiryuki" : "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
