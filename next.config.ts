import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. FOR DEVELOPMENT (Turbopack)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              dimensions: false,
              icon: true,
            },
          },
        ],
        as: '*.js',
      },
    },
  },

  // 2. FOR PRODUCTION (Webpack)
  webpack(config) {

    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
        use: [{ loader: '@svgr/webpack', options: { dimensions: false, icon: true } }],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;