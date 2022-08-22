/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['img.freepik.com', 'media.istockphoto.com']
  }
};

module.exports = nextConfig;
