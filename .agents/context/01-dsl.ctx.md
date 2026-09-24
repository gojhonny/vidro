# Vidro DSL

Vidro source is CSS-like and parsed by Langium.

## Canonical shape

```css
project: "langdrift";

website {
  PATH: "apps/website/";
}

website.default {
  RESEND_API_KEY: $RESEND_API_KEY;
}

website.development {
  API_URL: "http://localhost:8080";
  REQUIRED_VALUE;
}
```

## Decisions

- `project` is a reserved declaration.
- `PATH` is a reserved target property.
- `PATH` belongs to the target because it does not change per environment.
- Environment names are arbitrary identifiers. `development`, `production`, `preview`, `qa`, etc. are not language keywords.
- `default` maps to the plain `.env` environment output.
- `target.environment { ... }` declares an environment for a target.

## Value semantics

```css
KEY: "value";
```

Literal configuration owned by Vidro.

```css
KEY;
```

Required value with no literal/external source declared yet. This is not equivalent to an empty string.

```css
KEY: "";
```

Explicit empty string.

```css
RESEND_API_KEY: $RESEND_API_KEY;
```

External/secret reference. Secret values imported from private environment files must be represented this way in tracked Vidro source.

For now an external secret reference is expected to use the same name on both sides: `KEY: $KEY;`.
