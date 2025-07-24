/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'habrastorage.org',
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
};

export default nextConfig;
