'use client'

import { LanguageSwitcher } from '@vidro/react'
import {
  HOME_LOCALE_LANG,
  HOME_LOCALE_STORAGE_KEY,
  HOME_LOCALES,
  type HomeLocale,
  isHomeLocale,
} from '@vidro/react/locale'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(en|pt-BR|zh|ja)(\/.*)?$/)
  return match?.[2] ?? ''
}

export function DocsLocaleChrome({ lang }: { lang: HomeLocale }) {
  const pathname = usePathname()
  const router = useRouter()
  const search = useSearchParams()

  useEffect(() => {
    if (search.get('entry') === 'neutral') {
      const stored = window.localStorage.getItem(HOME_LOCALE_STORAGE_KEY)
      const target = isHomeLocale(stored) ? stored : lang
      router.replace(`/${target}${stripLocale(pathname)}`)
      return
    }
    window.localStorage.setItem(HOME_LOCALE_STORAGE_KEY, lang)
    document.documentElement.lang = HOME_LOCALE_LANG[lang]
  }, [lang, pathname, router, search])

  function onValueChange(next: HomeLocale) {
    if (!HOME_LOCALES.includes(next) || next === lang) {
      return
    }
    window.localStorage.setItem(HOME_LOCALE_STORAGE_KEY, next)
    document.documentElement.lang = HOME_LOCALE_LANG[next]
    router.push(`/${next}${stripLocale(pathname)}`)
  }

  return <LanguageSwitcher onValueChange={onValueChange} value={lang} />
}
