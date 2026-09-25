import type { HomeLocale } from '@vidro/react/locale'

export type DocsChrome = {
  docsTitle: string
  titleTemplate: string
  description: string
  search: string
  searchEmpty: string
  edit: string
  feedback: string
  footer: string
  website: string
  github: string
}

export const docsChrome: Record<HomeLocale, DocsChrome> = {
  en: {
    docsTitle: 'Vidro Docs',
    titleTemplate: '%s — Vidro Docs',
    description:
      'Documentation for Vidro, a declarative environment compiler. Designed semantics are marked separately from the current scaffold.',
    search: 'Search documentation…',
    searchEmpty: 'No results found.',
    edit: 'Edit this page',
    feedback: 'Question? Give us feedback',
    footer: 'Vidro is pre-alpha. The compiler commands and the public package are not released.',
    website: 'Website',
    github: 'GitHub',
  },
  'pt-BR': {
    docsTitle: 'Docs do Vidro',
    titleTemplate: '%s — Docs do Vidro',
    description:
      'Documentação do Vidro, um compilador declarativo de ambientes. A semântica projetada aparece separada do que o scaffold executa hoje.',
    search: 'Buscar na documentação…',
    searchEmpty: 'Nenhum resultado.',
    edit: 'Editar esta página',
    feedback: 'Dúvida? Envie um comentário',
    footer: 'O Vidro está em pré-alfa. Os comandos do compilador e o pacote público não foram lançados.',
    website: 'Site',
    github: 'GitHub',
  },
  zh: {
    docsTitle: 'Vidro 文档',
    titleTemplate: '%s — Vidro 文档',
    description: 'Vidro 文档。Vidro 是声明式环境编译器。设计语义与当前脚手架的实际行为分开说明。',
    search: '搜索文档…',
    searchEmpty: '没有结果。',
    edit: '编辑本页',
    feedback: '有问题？给我们反馈',
    footer: 'Vidro 处于 pre-alpha。编译器命令和公开发布的包都还没有推出。',
    website: '网站',
    github: 'GitHub',
  },
  ja: {
    docsTitle: 'Vidro ドキュメント',
    titleTemplate: '%s — Vidro ドキュメント',
    description:
      'Vidro のドキュメント。Vidro は宣言的な環境コンパイラです。設計上の意味と、現在のスキャフォールドが実際に行うことは分けて書いています。',
    search: 'ドキュメントを検索…',
    searchEmpty: '結果がありません。',
    edit: 'このページを編集',
    feedback: '質問がありますか？',
    footer: 'Vidro はプレアルファです。コンパイラのコマンドと公開パッケージは、まだリリースされていません。',
    website: 'ウェブサイト',
    github: 'GitHub',
  },
}

export const openGraphLocale: Record<HomeLocale, string> = {
  en: 'en_US',
  'pt-BR': 'pt_BR',
  zh: 'zh_CN',
  ja: 'ja_JP',
}
