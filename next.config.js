/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "https://www.svgrepo.com"],
  },
};

module.exports = nextConfig;
