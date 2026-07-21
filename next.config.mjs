



/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        localPatterns: [
            {
                pathname: "/assets/images/**",
                search: "",
            },
        ],

        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets.aceternity.com",
            },
            {
                protocol: "https",
                hostname: "*.pic.in.th",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
        ],
    },
    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};



export default nextConfig



