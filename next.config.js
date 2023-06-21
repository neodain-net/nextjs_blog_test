module.exports = {
  // serverRuntimeConfig: {
  //   // Will only be available on the server side
  //   apiUrl: "http://localhost:3000",
  // },
  // publicRuntimeConfig: {
  //   // Will be available on both server and client
  //   apiUrl: "http://localhost:3000",
  // },
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
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm)$/,
  //     type: "asset",
  //     generator: {
  //       filename: "static/chunks/[path][name].[hash][ext]",
  //     },
  //   });

  //   return config;
  // },

  // Possible ways to fix it : If you want to use SWC despite the presence of a .babelrc file you can force it in your next.config.js file.
  // experimental: {
  //   forceSwcTransforms: true,
  // },

  //   async rewrites() {
  //     return [
  //       {
  //         source: "/openai/",
  //         destination: "http://localhost:3000/api/:path*",
  //       },
  //       {
  //         source: "/api/room/:path*",
  //         destination: "http://localhost:3000/api/room/:path*",
  //       },
  //       {
  //         source: "/api/chat/:path*",
  //         destination: "http://localhost:3000/api/chat/:path*",
  //       },
  //     ];
  //   },
};

// NextJS 13 : /app 디렉토리를 사용하면 http://localhost:3000/의 홈 디렉토리 access 한다.
/** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
// }
