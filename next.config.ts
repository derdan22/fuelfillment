import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  serverExternalPackages: ["better-sqlite3", "@prisma/adapter-better-sqlite3"],
  async redirects() {
    return [
      { source: "/how-it-works", destination: "/yak-pracyuye", permanent: true },
      { source: "/services", destination: "/poslugy", permanent: true },
      { source: "/for-stores", destination: "/dlya-magazyniv", permanent: true },
      { source: "/for-marketplaces", destination: "/dlya-marketplejsiv", permanent: true },
      { source: "/pricing", destination: "/taryfy", permanent: true },
      { source: "/about", destination: "/pro-nas", permanent: true },
      { source: "/contacts", destination: "/kontakty", permanent: true },
      { source: "/contacts/:path*", destination: "/kontakty/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
