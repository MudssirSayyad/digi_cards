/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for development
  reactStrictMode: true,

  // Keep development output separate from production output to avoid stale
  // chunk reuse when switching between `next dev` and `next build` on Windows.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    unoptimized: process.env.NODE_ENV === 'development',
  },

  // Headers for performance
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Webpack config
  webpack: (config, { dev }) => {
    // Prevent intermittent corrupted .next vendor-chunks cache in local dev on Windows.
    if (dev) {
      config.cache = false;
    }

    return config;
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },

  // Redirects
  redirects: async () => {
    return [];
  },

  // Rewrites
  rewrites: async () => {
    return [];
  },
};

module.exports = nextConfig;
