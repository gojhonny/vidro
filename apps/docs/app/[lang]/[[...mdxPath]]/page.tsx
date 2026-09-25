import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { notFound } from 'next/navigation'
import { isHomeLocale } from '@vidro/react/locale'
import { useMDXComponents as getMDXComponents } from '../../../mdx-components'
import { openGraphLocale } from '../../../lib/chrome'

export const generateStaticParams = generateStaticParamsFor('mdxPath', 'lang')

type DocsPageProps = {
  params: Promise<{ lang: string; mdxPath?: string[] }>
}

export async function generateMetadata(props: DocsPageProps) {
  const params = await props.params
  if (!isHomeLocale(params.lang)) {
    return {}
  }
  const segments = params.mdxPath ?? []
  const { metadata } = await importPage(segments, params.lang)
  const path = segments.join('/')
  const suffix = path ? `/${path}` : ''
  return {
    ...metadata,
    alternates: {
      languages: {
        en: `/en${suffix}`,
        'pt-BR': `/pt-BR${suffix}`,
        zh: `/zh${suffix}`,
        ja: `/ja${suffix}`,
      },
    },
    openGraph: {
      locale: openGraphLocale[params.lang],
    },
  }
}

const Wrapper = getMDXComponents({}).wrapper

export default async function Page(props: DocsPageProps) {
  const params = await props.params
  if (!isHomeLocale(params.lang)) {
    notFound()
  }
  const segments = params.mdxPath ?? []
  const result = await importPage(segments, params.lang)
  const { default: MDXContent, toc, metadata, sourceCode } = result

  if (!Wrapper) {
    return <MDXContent {...props} params={params} />
  }

  return (
    <Wrapper metadata={metadata} sourceCode={sourceCode} toc={toc}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
