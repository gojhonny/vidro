import type { Metadata } from 'next'
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Vidro — One source. Every environment.',
  description:
    'Vidro compiles one declarative configuration into the environment files your projects need.',
  openGraph: {
    title: 'Vidro — One source. Every environment.',
    description:
      'Vidro compiles one declarative configuration into the environment files your projects need.',
    type: 'website',
    siteName: 'Vidro',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={`${plexSans.variable} ${plexMono.variable}`} lang="en">
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">{children}</body>
    </html>
  )
}
