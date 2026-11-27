/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Hemat kuota Vercel Image Optimization (paket Hobby dipakai bersama semua project):
    // cache hasil optimasi 31 hari (default Next 14 hanya 60 detik) dan
    // 7 ukuran saja di srcset (default 16 ukuran per gambar).
    minimumCacheTTL: 2678400,
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
}

export default nextConfig
