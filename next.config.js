/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig 