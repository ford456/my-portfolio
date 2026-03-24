



/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        localPatterns: [
            {
                pathname: '/assets/images/**',
                search: '',
            },
        ],
        remotePatterns: [{
            protocol: 'https',
            hostname: "assets.aceternity.com",
            search: '',
        },
        {
            protocol: 'https',
            hostname: 'img5.pic.in.th',
            search: '',
        },
        {
            protocol: 'https',
            hostname: 'img2.pic.in.th',
            search: '',
        },
        ],
    },
    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};



export default nextConfig



