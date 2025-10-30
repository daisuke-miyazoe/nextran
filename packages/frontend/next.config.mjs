/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    // 暫定対応。いずれ消す
    return [
      { source: "/api/:path*", destination: "http://localhost:3001/api/:path*"}
    ]
  }
};

export default nextConfig;
