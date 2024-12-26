/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    assetPrefix: "",
    basePath: "",
    images: {
        unoptimized: true, // 禁用图像优化
    },
};

export default nextConfig;