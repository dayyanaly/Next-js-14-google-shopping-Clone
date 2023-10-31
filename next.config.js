/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },

    experimental: {
        serverActions: true, 
    },
    images: {
        domains: ["links.papareact.com"],
    },
};

module.exports = nextConfig
