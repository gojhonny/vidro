import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

type DocsPageProps = {
  params: Promise<{ mdxPath?: string[] }>
}

export async function generateMetadata(props: DocsPageProps) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath ?? [])
  return metadata
}

const Wrapper = getMDXComponents({}).wrapper

export default async function Page(props: DocsPageProps) {
  const params = await props.params
  const result = await importPage(params.mdxPath ?? [])
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
