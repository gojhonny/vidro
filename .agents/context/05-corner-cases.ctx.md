# Corner cases

These cases belong to explicit detection/emitter policy. Do not flatten them into a generic dotenv assumption.

## Dotenv dialects

Supported ecosystems disagree about:

- quote and escape handling;
- `export KEY=value`;
- interpolation such as `${KEY}`;
- bare keys vs `KEY=`;
- multiline values;
- comments after values;
- duplicate keys;
- precedence among `.env`, mode-specific files, local files, and process environment.

Vidro should generate a deterministic safe subset and parse existing files conservatively.

## Java and Kotlin

Spring commonly uses `application.properties`, `application-{profile}.properties`, or YAML. These are application configuration files, not simply process environment files.

Spring relaxed binding can map property names and environment variable names differently. Do not assume `server.port` and `SERVER_PORT` are identical compiler symbols without an explicit mapping policy.

## C#

ASP.NET Core commonly combines `appsettings.json`, `appsettings.{Environment}.json`, environment variables, secrets, and command-line configuration.

Nested environment keys can use `__`, while JSON is hierarchical. This requires an explicit mapping layer rather than a flat string replacement.

## R

`.Renviron` is environment configuration loaded by R itself, but shell-style expansion and quoting behavior differ from the minimal Vidro DSL. Emit a conservative subset unless richer semantics are explicitly implemented.

## Swift

Swift is supported; Objective-C is explicitly unsupported.

Xcode `.xcconfig` is build configuration, not a generic process dotenv file. Server-side Swift may use dotenv libraries, while iOS/macOS client applications can bundle configuration into the application. A value placed in a client binary is not secret merely because it came from `$VARIABLE`.

## Browser and mobile exposure

JavaScript/TypeScript browser frameworks expose prefixed variables such as `NEXT_PUBLIC_*` or `VITE_*`. Flutter/mobile and Swift client builds have similar bundle exposure concerns.

Vidro must not describe client-bundled values as confidential secrets. Detection may warn when a target is client-side.

## C/C++

There is no universal C/C++ env-file convention. Only select dotenv behavior when repository evidence indicates a dotenv loader or conventional env files.

## External references

`KEY: $KEY;` records that the value is external. The exact resolution order among process environment, existing ignored `.env`, CI, and deployment providers is intentionally not frozen yet.
