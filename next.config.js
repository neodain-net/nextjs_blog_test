module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    apiUrl: "http://localhost:3000",
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiUrl: "http://localhost:3000",
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "https://neodain.up.railway.app/:path*",
  //     },
  //   ];
  // },
};

// NextJS 13 : /app 디렉토리를 사용하면 http://localhost:3000/의 홈 디렉토리 access 한다.
/** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
// }
