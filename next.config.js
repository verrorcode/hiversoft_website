/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['static.hiversoft.com'],
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig
