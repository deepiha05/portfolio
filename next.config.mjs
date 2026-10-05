/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build to plain static files in out/; no Node server is needed to host the site.
  output: "export",
  images: { unoptimized: true },
}

export default nextConfig
