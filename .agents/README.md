# Vidro agent harness

`.agents/` contains focused repository context and implementation rules, following the same fragmented-context shape used by LangDrift.

## Directory map

- `context/` — current product, DSL, architecture, support scope, scaffolding UX, and corner cases.
- `rules/` — implementation invariants that apply when their scope matches the task.
- `skills/` — reserved for repeatable implementation procedures.

## Loading order

1. Current code, grammar, config, and tests.
2. Explicit owner decisions.
3. [AGENTS.md](../AGENTS.md).
4. Relevant `.agents/context/*.ctx.md`.
5. Applicable `.agents/rules/*.rule.md`.

Do not infer new language semantics from examples when a context or rule states otherwise.
