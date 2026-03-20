---
title: Overview
description: How Backtalk is structured and why.
---

## Philosophy

Backtalk is a starter, not a framework. It provides:

- A token foundation — colors, typography, spacing, radius, motion
- A mixin toolkit — shadows, focus, layout, buttons, animations
- Sensible base element styles

It does not provide:

- Pre-built components you drop in and use
- A utility class system like Tailwind
- Opinions about your markup structure

The system generates a complete set of CSS custom properties from minimal
configuration. You build on top of those tokens using the mixins as tools.
A button component in your project uses `@include button-primary` and
`var(--color-interactive)` — Backtalk provides the primitives, you build
the UI.

This means Backtalk works alongside any component approach — Astro components,
React, Vue, web components, or plain HTML. It has no opinion about how you
structure your UI, only about the visual language underneath it.

A portable Sass folder copied into projects. Not a framework.
Projects configure it, the system generates the output.

## Future Direction

The current scope is intentionally minimal — tokens, mixins, and base styles.
A component library built on this foundation is a natural next step, but only
once the token system is proven stable across projects. The utilities layer
is reserved but currently minimal.

## Layer Order
```scss
@layer reset, tokens, base, components, utilities;
```

Each layer can only override layers above it in priority. No specificity fights.
Unlayered styles (such as Astro scoped component styles) always win over layered styles.

:::note[Astro]
The layer declaration must be output before any styles load. In Astro, add it
to your root layout as `is:inline` — Sass processing strips it otherwise.
:::

## Folder Structure
```
styles/
  config/       ← project sets seed values here
  colors/       ← derives accent, neutral, feedback from primary
  tokens/       ← generates all CSS custom properties
  reset/        ← Andy Bell modern reset
  base/         ← raw element defaults, no classes
  mixins/       ← shared patterns consumed by components
  utilities/    ← single-purpose classes
  animations/   ← keyframe definitions
```

## Configuration

Projects edit one file — `config/_config.scss`. Seed values only:
```scss
$colors: (
  "primary": #1A73FF,
) !default;

$color-scheme: "complementary" !default;

$font-overrides: (
  "body": (Inter, system-ui, sans-serif),
) !default;

$type-ratio: 1.25 !default;
$space-unit: 0.25rem !default;
```

The system derives everything else — accent color, neutral scale, feedback colors,
type scale, spacing scale. Projects only set intent.

## Color System

Colors flow through three stages:

**1. Generation** — `colors/` derives accent, neutral endpoints, and feedback
colors from the primary using oklch color space and the configured scheme.

**2. Scale** — every color gets a 50–950 scale generated via oklch lightness
and chroma manipulation. Perceptually uniform steps.

**3. Semantic mapping** — scale values are mapped to meaningful tokens in
`tokens/_semantic.scss`. Only semantic tokens remap in dark mode.
```
config.$colors + $color-scheme
  → colors/ generators    → complete $colors map
  → tokens/_colors.scss   → --color-primary-500 etc
  → tokens/_semantic.scss → --color-interactive, --color-bg etc
```

## Tokens

Two levels:

- **Scale tokens** — generated from config. `--color-primary-500`, `--text-xl`, `--space-4`.
  Never used directly in components.
- **Semantic tokens** — map scale to meaning. `--color-interactive`, `--color-bg`,
  `--font-body`. What components actually consume.

Sass variables are the build-time source of truth.
CSS custom properties are what the browser sees.

## Theming

Only semantic tokens remap for dark mode — the scale never changes.
Components theme automatically because they reference meaning, not values:
```scss
// dark mode — only in tokens/_semantic.scss
:root[data-theme="dark"] {
  --color-background: var(--color-neutral-950);
  --color-text:       var(--color-neutral-50);
  --color-interactive: var(--color-primary-400);
}
```

Theme is set via `data-theme` on the `<html>` element, driven by OS preference
with localStorage override.

## Base Elements

`base/` applies semantic tokens to raw HTML elements — no classes. Every
styled element uses tokens, never hardcoded values. The reset zeros
`margin-block-end` on prose elements — base sets `margin-block-start` using
the spacing scale.

## Mixins

Structural and behavioural patterns that components consume. Values inside
mixins always reference tokens — never hardcoded values or Sass variables.

Key mixins:
- `shadow($depth)` — 1–5 depth scale, direction from config
- `focus-ring` — applied to the element, generates `:focus-visible` internally
- `stack($space)` — flex column layout for UI components
- `flow($space)` — margin-based spacing for mixed content areas
- `scroll-container` — overflow scroll with `contain: inline-size`
- `button-primary`, `button-ghost` etc — visual button variants
- `respond-to($size)` — breakpoint mixins driven by config

## Rule of Thumb

> Config sets intent.
> The system generates the scale.
> Semantic tokens carry meaning.
> Components consume meaning, not values.