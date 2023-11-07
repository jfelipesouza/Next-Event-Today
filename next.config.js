/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = {
  ...withPWA({
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true
    }
    // Restante da sua configuração Next.js
  })
}

module.exports = nextConfig
