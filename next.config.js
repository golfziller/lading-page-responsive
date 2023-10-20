/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', /**for static  page */
  // distDir: "nextjs", /** for Server side render */
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
