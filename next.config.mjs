/** @type {import('next').NextConfig} */
// const nextConfig = {
//     output:"export",
// };

// export default nextConfig;

// next.config.js

const nextConfig = {
    target: 'experimental-serverless-trace',
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            // Add other routes here
        };
    },
};

export default nextConfig;