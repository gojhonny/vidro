import { NextResponse, type NextRequest } from 'next/server'
import { isHomeLocale } from '@vidro/react/locale'

const localePattern = /^\/(en|pt-BR|zh|ja)(?=\/|$)/

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const match = pathname.match(localePattern)
  const locale = match?.[1]
  if (locale && isHomeLocale(locale)) {
    const headers = new Headers(request.headers)
    headers.set('x-vidro-locale', locale)
    return NextResponse.next({ request: { headers } })
  }

  const url = request.nextUrl.clone()
  url.pathname = pathname === '/' ? '/en' : `/en${pathname}`
  url.searchParams.set('entry', 'neutral')
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|icon.svg|.*\\..*).*)'],
}
