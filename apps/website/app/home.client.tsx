'use client'

import { CrackedGlassBackground, GithubStars, InstallCommand, VidroLogo } from '@vidro/react'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import {
  HOME_COPY,
  HOME_LOCALE_LANG,
  HOME_LOCALE_STORAGE_KEY,
  type HomeLocale,
  isHomeLocale,
} from './home-locale'
import { packageManagerAtom } from './install-atom'
import { LanguageSwitcher } from './language-switcher'

const docsUrl = process.env.NEXT_PUBLIC_DOCS_URL ?? 'http://localhost:3001'

export function HomeExperience({ stars }: { stars: number | null }) {
  const [locale, setLocale] = useState<HomeLocale>('en')
  const [manager, setManager] = useAtom(packageManagerAtom)
  const copy = HOME_COPY[locale]

  useEffect(() => {
    const stored = window.localStorage.getItem(HOME_LOCALE_STORAGE_KEY)
    if (isHomeLocale(stored)) {
      setLocale(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = HOME_LOCALE_LANG[locale]
  }, [locale])

  function selectLocale(next: HomeLocale) {
    setLocale(next)
    window.localStorage.setItem(HOME_LOCALE_STORAGE_KEY, next)
  }

  return (
    <div className="relative min-h-dvh">
      <CrackedGlassBackground />
      <header className="absolute inset-x-0 top-0 z-20 bg-white/60 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-2 px-3 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-3">
            <a aria-label="Vidro" className="shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground" href="/">
              <VidroLogo />
            </a>
            <LanguageSwitcher locale={locale} onSelect={selectLocale} />
          </div>
          <div className="flex shrink-0 items-center gap-2.5 sm:gap-4">
            <a
              className="text-[0.8rem] font-[650] tracking-[0.04em] text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:text-[0.86rem]"
              href={docsUrl}
            >
              {copy.docs}
            </a>
            <GithubStars count={stars} href="https://github.com/gojhonny/vidro" />
          </div>
        </div>
      </header>
      <main className="relative z-10 flex min-h-dvh items-center justify-center px-5 pb-16 pt-24">
        <div className="mx-auto flex w-full max-w-[40rem] flex-col items-center text-center">
          <h1 className="text-[2.5rem] font-medium leading-[1.1] tracking-[-0.03em] text-foreground sm:text-[3.25rem]">
            Vidro
          </h1>
          <p className="mt-4 text-balance text-[1.25rem] font-medium leading-[1.35] text-foreground sm:text-[1.5rem]">
            {copy.slogan}
          </p>
          <p className="mt-4 max-w-[40rem] text-pretty text-base leading-relaxed text-muted">
            {copy.description}
          </p>
          <div className="mt-8 w-full max-w-[32rem]">
            <InstallCommand onValueChange={setManager} value={manager} />
          </div>
        </div>
      </main>
    </div>
  )
}
