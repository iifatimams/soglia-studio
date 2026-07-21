import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@soglia/ui"],
  reactStrictMode: true
};

export default nextConfig;
