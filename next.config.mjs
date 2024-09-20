/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "urban-couscous-qj5j6xgvx5pfx74p-3000.app.github.dev",
        "localhost:3000"
      ],
    },
  },
};

export default nextConfig;
