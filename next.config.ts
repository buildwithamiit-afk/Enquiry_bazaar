import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dxcakk4vq/image/upload/**",
      },
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/software-development-for-manufacturers",
        destination: "/custom-software-and-website-development-for-manufacturers",
        permanent: true,
      },
      {
        source: "/website-development-for-manufacturers",
        destination: "/custom-software-and-website-development-for-manufacturers",
        permanent: true,
      },
      {
        source: "/manufacturing-software",
        destination: "/custom-software-and-website-development-for-manufacturers",
        permanent: true,
      },
      {
        source: "/generative-engine-optimization-agency",
        destination: "/ai-search-optimization-agency",
        permanent: true,
      },
      {
        source: "/get-recommended-by-ai",
        destination: "/ai-search-optimization-agency",
        permanent: true,
      },
      {
        source: "/geo-agency",
        destination: "/ai-search-optimization-agency",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
