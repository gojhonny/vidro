export const supportedLanguageFamilies = [
  'python',
  'java',
  'c-cpp',
  'r',
  'javascript',
  'php',
  'rust',
  'csharp',
  'swift',
  'typescript',
  'ruby',
  'dart',
  'kotlin',
  'go'
] as const

export type SupportedLanguageFamily = (typeof supportedLanguageFamilies)[number]

export const explicitlyUnsupportedLanguageFamilies = [
  'cobol',
  'groovy',
  'zig',
  'visual-basic',
  'haskell',
  'perl',
  'delphi-pascal',
  'abap',
  'scala',
  'julia',
  'lua',
  'vba',
  'powershell',
  'matlab',
  'ada',
  'objective-c'
] as const
