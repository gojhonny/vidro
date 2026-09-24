import nextra from 'nextra'
import type { NextConfig } from 'next'

const withNextra = nextra({})

const nextConfig: NextConfig = {
  transpilePackages: ['@vidro/react', '@vidro/design-system'],
}

export default withNextra(nextConfig)
