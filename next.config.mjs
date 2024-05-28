/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    // distDir: "dist",
    // images: {
    //     unoptimized: true,
    // }
    webpack: (config, options) => {
        config.module.rules.push({
            test: /.pdf$/i,
            type: 'asset/resource',
        })
        return config
    },
};

export default nextConfig;
