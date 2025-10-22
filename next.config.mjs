



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
   allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};

  

export default nextConfig



