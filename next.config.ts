import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/with-jest",

  assetPrefix: "/with-jest/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
