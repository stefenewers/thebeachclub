import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Next 16 only allows [75] by default; editorial plates use 60–85.
    qualities: [60, 75, 85],
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "image.mux.com" },
    ],
  },
  poweredByHeader: false,
};

export default nextConfig;
