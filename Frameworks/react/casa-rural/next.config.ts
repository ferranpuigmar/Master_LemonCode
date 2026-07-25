import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // This project lives inside a monorepo with other lockfiles; pin the tracing
  // root to this app so Next.js doesn't infer the wrong workspace root.
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/images/**',
      },
    ],
  },
}

export default nextConfig
