---
title: Colors
description: Color tokens — scale and semantic.
---

Colors are generated from config in three stages — scale generation,
neutral derivation, and semantic mapping. Always use semantic tokens
in components.

[See live demos →](/system/colors)

## Scale Tokens

Generated for every color in `$color-overrides` plus derived colors
(accent, neutral, feedback). Each color gets a full 50–950 scale:
```css
--color-{name}-50
--color-{name}-100
--color-{name}-200
--color-{name}-300
--color-{name}-400
--color-{name}-500   ← closest to the base color
--color-{name}-600
--color-{name}-700
--color-{name}-800
--color-{name}-900
--color-{name}-950
```

Generated for: `primary`, `accent`, `neutral`, `success`, `warning`,
`error`, `info`, plus any extra colors set in config.

:::caution
Scale tokens are for building the semantic layer — not for use in
components directly. Use semantic tokens instead.
:::

---

## Semantic Tokens

### Surfaces

| Token | Light | Dark |
|---|---|---|
| `--color-background` | `neutral-50` | `neutral-950` |
| `--color-surface` | `neutral-100` | `neutral-900` |
| `--color-surface-raised` | `neutral-200` | `neutral-800` |
| `--color-overlay` | `neutral-300` | `neutral-700` |

### Borders

| Token | Light | Dark |
|---|---|---|
| `--color-border` | `neutral-200` | `neutral-700` |
| `--color-border-strong` | `neutral-400` | `neutral-500` |

### Text

| Token | Light | Dark |
|---|---|---|
| `--color-text` | `neutral-900` | `neutral-50` |
| `--color-text-muted` | `neutral-600` | `neutral-400` |
| `--color-text-subtle` | `neutral-400` | `neutral-600` |
| `--color-text-inverse` | `neutral-50` | `neutral-900` |

### Interactive

| Token | Light | Dark |
|---|---|---|
| `--color-interactive` | `primary-500` | `primary-400` |
| `--color-interactive-hover` | `primary-600` | `primary-300` |
| `--color-interactive-active` | `primary-700` | `primary-200` |
| `--color-interactive-muted` | `primary-100` | `primary-900` |
| `--color-focus` | `primary-300` | `primary-400` |

### Accent

| Token | Light | Dark |
|---|---|---|
| `--color-accent` | `accent-500` | `accent-400` |
| `--color-accent-hover` | `accent-600` | `accent-300` |
| `--color-accent-muted` | `accent-100` | `accent-900` |

### Feedback

Each feedback color has three tokens — base, surface, and text:

| Token | Light | Dark |
|---|---|---|
| `--color-success` | `success-500` | `success-500` |
| `--color-success-surface` | `success-100` | `success-900` |
| `--color-success-text` | `success-700` | `success-300` |
| `--color-warning` | `warning-500` | `warning-500` |
| `--color-warning-surface` | `warning-100` | `warning-900` |
| `--color-warning-text` | `warning-700` | `warning-300` |
| `--color-error` | `error-500` | `error-500` |
| `--color-error-surface` | `error-100` | `error-900` |
| `--color-error-text` | `error-700` | `error-300` |
| `--color-info` | `info-500` | `info-500` |
| `--color-info-surface` | `info-100` | `info-900` |
| `--color-info-text` | `info-700` | `info-300` |

### Header

| Token | Light | Dark |
|---|---|---|
| `--color-header-background` | `primary-500` | `primary-500` |
| `--color-header-text` | `primary-200` | `primary-900` |
| `--color-header-border` | `primary-800` | `primary-200` |