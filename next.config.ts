import type { NextConfig } from "next";

const basePath = '/portfolio-ii';

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath,
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // App Router is enabled by default in Next.js 13+
};

export default nextConfig;
