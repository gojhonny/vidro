# Vidro

A declarative environment compiler.

Vidro turns one project-level configuration into the environment files required by the targets in a repository.

> Status: pre-alpha. The repository currently defines the language, compiler boundaries, CLI surface, and agent context before the first functional compiler implementation.

## Direction

```text
.vidro/<project>.vidro
        ↓
      Langium
        ↓
       AST
        ↓
 semantic validation
        ↓
     Vidro IR
        ↓
      emitters
        ↓
      .env*
```

The generated/intermediate representation belongs under `.vidro/.generated/`. The `.vidro` source remains the source of truth.

## Monorepo

- `apps/website` — future public website.
- `apps/docs` — future documentation application.
- `packages/language` — Vidro DSL implemented with Langium.
- `packages/core` — IR, compiler contracts, detection, and emitters.
- `packages/cli` — `vidro` CLI and repository scaffolding.

Repository guidance and product decisions live in [`.agents/`](.agents/README.md).

## Planned CLI

```bash
vidro init
vidro generate
vidro validate
vidro check
vidro show
```
