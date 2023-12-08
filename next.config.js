/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = {
  ...withPWA({
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true
    }
  }),

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tjhgywhkfrkgnynwbcuy.supabase.co'
      }
    ]
  }
}

module.exports = nextConfig
