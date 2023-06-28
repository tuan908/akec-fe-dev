/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: {
      autoLabel: 'dev-only',
      sourceMap: true
    }
  },
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname: '/media/**'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**'
      }
    ]
  },
  swcMinify: true,
  env: {
    NEXT_PUBLIC_BN_SPRING_API: 'http://localhost:8082/api/v1/'
  }
}

module.exports = nextConfig
