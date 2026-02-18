import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. FOR DEVELOPMENT
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              dimensions: false, // Automatically strips width and height
              icon: true,
            },
          },
        ],
        as: '*.js',
      },
    },
  },

  // 2. FOR PRODUCTION (uses webpack)
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        { 
          loader: '@svgr/webpack', 
          options: { dimensions: false, icon: true } 
        }
      ],
    });
    return config;
  },
};

export default nextConfig;
