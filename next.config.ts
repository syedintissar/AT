import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // One canonical host: send the bare domain to www, keeping the path.
      { source: "/:path*", has: [{ type: "host", value: "alhawaijtech.com" }], destination: "https://www.alhawaijtech.com/:path*", permanent: true },
      // URLs from the previous PHP site, so existing links and rankings carry over.
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/get-services", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
