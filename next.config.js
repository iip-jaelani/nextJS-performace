/**
 * @format
 */
const withMDX = require('@next/mdx')()
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const rootConfig = {
  images: {
    domains: ['i.imgflip.com'],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
}

module.exports = withBundleAnalyzer(withMDX(rootConfig))
