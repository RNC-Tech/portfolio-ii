import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portfolio-ii/projects' : '';

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    path: `${basePath}/_next/image`,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  publicRuntimeConfig: {
    basePath: basePath,
  },
};

export default nextConfig;
