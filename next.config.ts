import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        port: "8000",
        pathname: "/static/**",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
