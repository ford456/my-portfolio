



/** @type {import('next').NextConfig} */
const nextConfig = {
    // เลขประจำแต่ละ build ใช้แยก cache ของข้อมูลจาก backend ในแต่ละ deploy
    env: {
        DEPLOY_VERSION: process.env.VERCEL_DEPLOYMENT_ID || String(Date.now()),
    },
    images: {
        localPatterns: [
            {
                pathname: "/assets/images/**",
                search: "",
            },
            {
                pathname: "/assets/PortLogoWhite.png",
                search: "",
            },
            {
                pathname: "/FriendalyLogo.png",
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
                pathname: "/donnu2idb/image/upload/**",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "/dlt9egtdv/image/upload/**",
            },
        ],
    },
    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};



export default nextConfig



