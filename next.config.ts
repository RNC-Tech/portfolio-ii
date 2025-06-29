import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  basePath: isProd ? '/portfolio-ii/projects' : '',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    path: isProd ? '/portfolio-ii/projects/_next/image' : '/_next/image',
  }
};

export default nextConfig;
