import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https', // Specify HTTPS protocol
                hostname: 'placehold.co', // The hostname of the external image source
            },
        ],
    },
};

export default nextConfig;
