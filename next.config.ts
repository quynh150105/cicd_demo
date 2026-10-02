import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/with-jest",

  assetPrefix: "/with-jest/",

  images: {
    unoptimized: true,
  },
};

export function generateStaticParams() {
  return [{ slug: "Test" }, { slug: "hello" }, { slug: "nextjs" }];
}

export default nextConfig;
