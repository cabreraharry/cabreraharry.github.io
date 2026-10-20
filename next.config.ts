import type { NextConfig } from "next";

// Static export for GitHub Pages: `next build` writes plain HTML/CSS/JS to out/.
// GitHub Pages can't run a server, so no headers(), API routes or image optimizer.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
