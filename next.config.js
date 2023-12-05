/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedForwardedHosts: ["brown-lifeguard-szysp.pwskills.app:3000"],
      allowedOrigins: [
        "brown-lifeguard-szysp.pwskills.app:3000",
        "brown-lifeguard-szysp.pwskills.app"
      ]
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com"
      },
      {
        protocol: "https",
        hostname: "i.imgur.com"
      }
    ],
  },
};

module.exports = nextConfig;
