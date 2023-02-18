/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DATABASE_NAME: process.env.DATABASE_NAME,
    PORT: process.env.PORT,
    PASSWORD: process.env.PASSWORD,
    USER: process.env.USER,
    HOST: process.env.HOST,
  },
}

module.exports = nextConfig
