/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
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
        destination: "https://drive.google.com/file/d/1kWmM_amc-KKL3s9KpuGESNZmoZcpkw9I/view?usp=share_link",
        permanent: true,
      },


    ]
  },
}
