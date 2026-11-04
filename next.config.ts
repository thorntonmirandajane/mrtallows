import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images are pre-sized, pre-compressed WebP in /public, served as-is.
    // Runtime optimization was slow (and sometimes failed) on Render's small instances.
    unoptimized: true,
  },
};

export default nextConfig;
