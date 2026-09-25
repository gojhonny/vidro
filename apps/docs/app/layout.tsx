import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import { headers } from 'next/headers'
import type { ReactNode } from 'react'
import { HOME_LOCALE_LANG, isHomeLocale } from '@vidro/react/locale'
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

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headerList = await headers()
  const requested = headerList.get('x-vidro-locale')
  const lang = isHomeLocale(requested) ? HOME_LOCALE_LANG[requested] : 'en'

  return (
    <html className={`${plexSans.variable} ${plexMono.variable}`} lang={lang} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
