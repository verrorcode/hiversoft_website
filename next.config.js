/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          domains: ['static.hiversoft.com'],
          unoptimized: true,
        },
        output: 'export',
}

module.exports = nextConfig
