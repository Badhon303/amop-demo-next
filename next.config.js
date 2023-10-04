/** @type {import('next').NextConfig} */
const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: "/:path*",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           // value: `public, max-age=${process.env.NEXT_PUBLIC_CACHE_MAX_AGE}, must-revalidate`,
  //           value: `no-cache, no-store, must-revalidate`,
  //         },
  //       ],
  //     },
  //   ]
  // },
  // assetPrefix: `?v=${new Date().getTime()}`,
}

module.exports = nextConfig
