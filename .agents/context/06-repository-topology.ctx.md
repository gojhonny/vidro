# Repository topology

Vidro is a pnpm/Turborepo monorepo because the compiler, CLI, website, and docs have independent build/runtime concerns but share one repository.

```text
apps/
  website/
  docs/

packages/
  language/
  core/
  cli/

.agents/
  context/
  rules/
  skills/
```

## Boundaries

`packages/language` owns syntax and parser-generated structures.

`packages/core` owns semantics after parsing: IR, validation, repository detection, external resolution policy, and emitters.

`packages/cli` owns command UX and filesystem orchestration. It should call core behavior rather than reimplement compiler logic.

The website and docs must not become dependencies of compiler packages.
