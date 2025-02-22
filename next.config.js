/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          domains: ['static.hiversoft.com'],
        //   unoptimized: true,
          unoptimized: process.env.NODE_ENV === 'development'
        },
        output: 'export',
}

module.exports = nextConfig
