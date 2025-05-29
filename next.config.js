/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Recommended for static exports
  // Ensure meta tags are properly generated
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig 