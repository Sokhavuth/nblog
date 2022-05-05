/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env:{
    SECRET_KEY : process.env.SECRET_KEY,
    DATABASE_URI: process.env.DATABASE_URI,
  },

}

module.exports = nextConfig
