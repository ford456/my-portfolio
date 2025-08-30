



/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        localPatterns: [
            {
                pathname: '/assets/images/**',
                search: '',
            },
        ],
        remotePatterns: [ {
            protocol:'https',
            hostname:"assets.aceternity.com",
            search:'',
        } ],
    },
   
};

export default nextConfig



