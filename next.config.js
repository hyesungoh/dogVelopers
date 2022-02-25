const withPlugins = require('next-compose-plugins');
const { withSentryConfig } = require('@sentry/nextjs');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const moduleExports = {
  nextConfig,
};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withPlugins(
  [
    withSentryConfig(moduleExports, sentryWebpackPluginOptions),
    withBundleAnalyzer({
      compress: true,
      webpack(config) {
        return { ...config };
      },
    }),
  ],
  nextConfig
);
