import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portfolio-ii/projects' : '';

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath.endsWith('/') ? basePath.slice(0, -1) : basePath,
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // App Router is enabled by default in Next.js 13+
};

export default nextConfig;
