/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [{ source: '/', destination: Routes.HOME, permanent: true }]
  },
  env: {
    NEXT_PUBLIC_BN_SPRING_API: 'http://localhost:8082/api/v1/'
  }
}

module.exports = nextConfig
