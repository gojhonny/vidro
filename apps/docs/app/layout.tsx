import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { VidroLogo } from '@vidro/react'
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-sans',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
})

const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL ?? 'http://localhost:3000'

export const metadata = {
  title: {
    default: 'Vidro Docs',
    template: '%s — Vidro Docs',
  },
  description:
    'Documentation for Vidro, a declarative environment compiler. Designed semantics are marked separately from the current scaffold.',
}

const navbar = (
  <Navbar logo={<VidroLogo />} logoLink="/">
    <a
      className="text-sm font-medium text-foreground"
      href={websiteUrl}
    >
      Website
    </a>
    <a
      className="text-sm font-medium text-foreground"
      href="https://github.com/gojhonny/vidro"
    >
      GitHub
    </a>
  </Navbar>
)

const footer = (
  <Footer>
    Vidro is pre-alpha. The compiler commands and the public package are not released.
  </Footer>
)

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={`${plexSans.variable} ${plexMono.variable}`} lang="en" suppressHydrationWarning>
      <Head
        backgroundColor={{ dark: '#F8FBFC', light: '#F8FBFC' }}
        color={{ hue: 200, saturation: 10 }}
      />
      <body>
        <Layout
          darkMode={false}
          docsRepositoryBase="https://github.com/gojhonny/vidro/tree/main/apps/docs"
          footer={footer}
          navbar={navbar}
          nextThemes={{ defaultTheme: 'light', forcedTheme: 'light' }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
