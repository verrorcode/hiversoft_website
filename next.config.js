/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['static.hiversoft.com'],
    unoptimized: true,
  },

  basePath: '',
  assetPrefix: './', // ← Required for correct asset loading
};



module.exports = nextConfig;
