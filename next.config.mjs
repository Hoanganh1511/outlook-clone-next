/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://mailtrap.io/:path*",
      },
    ];
  },
};

export default nextConfig;
