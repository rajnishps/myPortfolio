/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["picsum.photos"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/rajnishps",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/boxRPS",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/rajnishps/",
        permanent: true,
      },
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1MM7GRzk2TiBVc4kG1Dic5F2IrOgyeUeH/view?usp=sharing",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
