---
title: Radius
description: Radius tokens — border radius scale.
---

Generated from `$radius-base` in config (default `6px`). All tokens
scale proportionally — changing the base value updates the entire system.

Override in `config/_config.scss`:
```scss
$radius-base-override: 4px !default;
```

## Scale

| Token | Multiplier | Default value |
|---|---|---|
| `--radius-sm` | ×0.5 | 3px |
| `--radius-md` | ×1 | 6px |
| `--radius-lg` | ×1.5 | 9px |
| `--radius-xl` | ×2 | 12px |
| `--radius-2xl` | ×3 | 18px |

A `none` value (0) is available via the `radius(none)` mixin but is
not exposed as a token.

## Usage

Radius tokens are consumed by the radius mixins rather than directly —
see [Radius mixins](/reference/mixins/radius) for semantic defaults per
element type:
```scss
// via mixin — preferred
.card { @include radius-card; }

// direct token — when mixin is too specific
.my-element { border-radius: var(--radius-lg); }
```