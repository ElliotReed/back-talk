---
title: Tokens
description: All Backtalk CSS custom properties — colors, typography, spacing, motion, and radius.
---

CSS custom properties generated from config. Always consume semantic tokens
in components — never scale tokens directly.
```scss
// ❌ scale token — too specific, won't theme
.button { background: var(--color-primary-500); }

// ✅ semantic token — themes automatically
.button { background: var(--color-interactive); }
```

## All Tokens

### Colors
- [Colors](/reference/tokens/colors) — `--color-*` scale and semantic tokens

### Typography
- [Typography](/reference/tokens/typography) — `--font-*`, `--text-*`, `--leading-*`, `--tracking-*`, `--font-weight-*`

### Spacing
- [Spacing](/reference/tokens/spacing) — `--space-*` numeric, named, and semantic aliases

### Motion
- [Motion](/reference/tokens/motion) — `--duration-*`, `--ease-*`, `--transition-*`

### Radius
- [Radius](/reference/tokens/radius) — `--radius-*` scale