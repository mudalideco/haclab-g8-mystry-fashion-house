/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  turbopack: {
    root: __dirname,
  },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;