# 001 — Source of truth

Scope: compiler, CLI, environment management.

`.vidro/<project>.vidro` is the declarative source of truth for the environment contract.

Generated environment/config files and `.vidro/.generated/*` are derived artifacts.

Do not introduce a second hand-maintained schema in application code to describe the same required variables. Vidro validation is intended to replace duplicated environment contract files such as framework-local `env.ts` validators.
