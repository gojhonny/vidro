import nextra from 'nextra'
import type { NextConfig } from 'next'

const withNextra = nextra({
  unstable_shouldAddLocaleToLinks: true,
})

const nextConfig = {
  i18n: {
    locales: ['en', 'pt-BR', 'zh', 'ja'],
    defaultLocale: 'en',
  },
  transpilePackages: ['@vidro/react', '@vidro/design-system'],
} as NextConfig

export default withNextra(nextConfig)
