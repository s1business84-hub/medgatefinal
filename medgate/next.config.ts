import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.179", "localhost"],
  swcMinify: true,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
    turbopack: {
      root: ".",
      resolveExtensions: [".ts", ".tsx", ".js", ".jsx"],
    },
  },
};

export default nextConfig;
