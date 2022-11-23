/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '49thshelf.com',
        port: '',
        pathname: '/var/**',
      },
    ],
    minimumCacheTTL: 60,
  },
  async rewrites() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'page',
            value: '(?<page>.+)',
          },
        ],
        destination: '/:page',
      },
      {
        source: '/',
        destination: '/1',
      },
    ];
  },
};

module.exports = nextConfig
