# Web surfaces

Stable decisions for the public website and documentation. Website language support is unrelated to the Vidro environment DSL.

## Website

- Next.js App Router, React, TypeScript, and Tailwind.
- One route, `/`. A single-page landing. Light theme only.
- Procedural cracked-glass background. No raster or SVG background asset.
- Header, left cluster: Vidro logo, then the language switcher. Right cluster: Docs, then GitHub stars.
- Hero and installation command. No features, pricing, testimonials, or FAQ unless explicitly requested.
- Locales: `en`, `pt-BR`, `zh`, `ja`.
- Locale switching follows the same lightweight client-side architecture as the NeonGate homepage. Selection persists in localStorage. There are no locale-prefixed routes. The default locale is English.
- Selector labels: `EN`, `PT-BR`, `中文`, `あ`. The switcher sits immediately to the right of the Vidro logo.
- Multilingual website copy is centralized in a locale module rather than distributed through JSX.
- Install commands, package-manager labels, the product name, and GitHub URLs are not translated.

## Docs

- Nextra, `nextra-theme-docs`, App Router, and Tailwind.
- Light theme only. No cracked-glass background.
- Native Nextra sidebar, search, and table of contents.
- English only. Docs are not multilingual.
- Product examples live in the docs, not in a root `examples/` directory.

## Shared design

- `@vidro/design-system` owns tokens.
- `@vidro/react` owns shared React components and effects.
- Root `DESIGN.md` is an Airtable structural reference, not Vidro's brand.
- SmoothUI is interaction inspiration, not a dependency architecture.
- The website and docs do not duplicate the design system.
