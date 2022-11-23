/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        remotePatterns: [{
            protocol: 'https',
            hostname: '49thshelf.com',
            port: '',
            pathname: '/var/**',
        }, ],
        minimumCacheTTL: 60,
    },
    async rewrites() {
        return [{
                source: '/',
                has: [{
                    type: 'query',
                    key: 'page',
                    value: '(?<page>.+)',
                }, ],
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