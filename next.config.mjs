



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
            hostname: '*.pic.in.th',
            
        }
        ],
    },
    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};



export default nextConfig



