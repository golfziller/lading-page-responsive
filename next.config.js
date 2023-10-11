/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    distDir: "nextjs",
    styledComponents: true
  }
}

module.exports = nextConfig
