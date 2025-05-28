/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['static.hiversoft.com'],
    unoptimized: true,
  },
  basePath: '/hiversoft_website',
  assetPrefix: '/hiversoft_website',
}

module.exports = nextConfig
