import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false, // IMPORTANT: set to false
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
        pathname: "/**",
      },
    ],
  },
};

const sentryConfig = withSentryConfig(
  nextConfig,
  {
    org: "jsm-x9",
    project: "javascript-nextjs",
    silent: true,
    widenClientFileUpload: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  },
  {
    // Next.js build-time config (optional)
    dryRun: false,
  }
);

export default sentryConfig;
