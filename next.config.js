/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'img.freepik.com',
      'media.istockphoto.com',
      'd1cua0vf0mkpiy.cloudfront.net'
    ],
    loader: 'custom'
  },
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: `${process.env.REWRITE_URL}/:slug*`
      }
    ];
  }
};

module.exports = nextConfig;
