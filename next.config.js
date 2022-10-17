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
        destination: `https://${process.env.BASE_REQUEST_URL}/:slug*`
      }
    ];
  }
};

module.exports = nextConfig;
