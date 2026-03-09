import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.PAGES_BASE_PATH,
  // assetPrefix: process.env.PAGES_BASE_PATH,
  assetPrefix: "/alishev-test-app",
  output: "export",
};

export default nextConfig;
