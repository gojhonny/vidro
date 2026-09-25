import type { HomeLocale } from '@vidro/react/locale'

export interface HomeCopy {
  slogan: string
  description: string
  docs: string
}

export const HOME_COPY: Record<HomeLocale, HomeCopy> = {
  en: {
    slogan: 'One source. Every environment.',
    description:
      'Vidro compiles one declarative configuration into the environment files your projects need — detecting, validating and keeping them in sync.',
    docs: 'Docs',
  },
  'pt-BR': {
    slogan: 'Uma fonte. Todos os ambientes.',
    description:
      'O Vidro compila uma configuração declarativa nos arquivos de ambiente que seus projetos precisam — detectando, validando e mantendo-os em sincronia.',
    docs: 'Docs',
  },
  zh: {
    slogan: '一个来源。全部环境。',
    description:
      'Vidro 将一份声明式配置编译成项目所需的环境文件——检测、校验，并保持同步。',
    docs: '文档',
  },
  ja: {
    slogan: '一つのソース。すべての環境。',
    description:
      'Vidro は、一つの宣言的な設定をプロジェクトが必要とする環境ファイルへコンパイルします。検出、検証、同期まで担います。',
    docs: 'ドキュメント',
  },
}
