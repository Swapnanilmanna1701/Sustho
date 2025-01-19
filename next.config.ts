/** @type {import('next').NextConfig} */
const nextConfig = {
  
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
  
      return config;
    },
  
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "randomuser.me",
              
          },
          {
            protocol: "https",
            hostname: "images.unsplash.com",
            
        }
        ,
          {
            protocol: "https",
            hostname: "img.freepik.com",
            
        },
        
      ]
  }
};

export default nextConfig;