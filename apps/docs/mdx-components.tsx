import type { MDXComponents } from 'nextra/mdx-components'
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import { DocsPre } from './components/docs-pre'

const themeComponents = getThemeComponents()

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...themeComponents,
    ...components,
    pre: DocsPre,
  }
}
