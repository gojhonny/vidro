# Scaffolding UX

The scaffolder must be short. Repository inspection is cheaper than asking the developer questions.

## Principle

> detect > infer > ask

Vidro must automatically inspect repository files, package/workspace manifests, language manifests, existing environment/config files, ignore rules, and known framework conventions where those facts are relevant.

## Questions

Only ask when a value is genuinely ambiguous after detection. The remaining useful question categories are:

- project name, if it cannot be inferred;
- project root, if invocation context is ambiguous;
- single-project vs monorepo topology, only if repository structure does not make it clear.

Do not ask the user to manually provide:

- target lists;
- target PATH values;
- runtime/framework presets;
- which existing environment files to import;
- mappings from filenames to environment names;
- whether safe values should become literals;
- whether secrets should become `$VARIABLE` references;
- how empty values should be treated;
- whether to update `.gitignore`;
- whether to add package scripts;
- whether to add CI/pre-commit checks;
- whether to generate immediately.

Those are detection/compiler policy, not onboarding questions.

A scaffold should report what it detected and what it changed, rather than turning detection into an interview.
