---
title: Spacing
description: Spacing tokens — numeric scale, named aliases, and semantic aliases.
---

Generated from `$space-unit` (default `0.25rem` / 4px). Three tiers —
numeric for precision, named for readability, semantic for intent.

[See live demos →](/system/spacing)

## Numeric Scale

Steps 1–4 are granular 4px increments. Steps 5–10 are progressive
jumps — larger sizes need less precision:

| Token | Multiplier | Default value |
|---|---|---|
| `--space-1` | ×1 | 0.25rem / 4px |
| `--space-2` | ×2 | 0.5rem / 8px |
| `--space-3` | ×3 | 0.75rem / 12px |
| `--space-4` | ×4 | 1rem / 16px |
| `--space-5` | ×6 | 1.5rem / 24px |
| `--space-6` | ×8 | 2rem / 32px |
| `--space-7` | ×12 | 3rem / 48px |
| `--space-8` | ×16 | 4rem / 64px |
| `--space-9` | ×20 | 5rem / 80px |
| `--space-10` | ×24 | 6rem / 96px |

## Named Aliases

| Token | Maps to |
|---|---|
| `--space-xs` | `--space-1` |
| `--space-sm` | `--space-2` |
| `--space-md` | `--space-4` |
| `--space-lg` | `--space-6` |
| `--space-xl` | `--space-8` |
| `--space-2xl` | `--space-10` |

## Semantic Aliases

| Token | Maps to | Usage |
|---|---|---|
| `--space-gutter` | `--space-5` | Page and grid gutters |
| `--space-section` | `--space-9` | Between page sections |
| `--space-stack` | `--space-4` | Vertical spacing between elements |
| `--space-inline` | `--space-2` | Horizontal spacing between inline elements |
| `--space-inset` | `--space-4` | Padding inside components |
| `--space-inset-sm` | `--space-2` | Tight padding, small components |
| `--space-inset-lg` | `--space-6` | Loose padding, large components |

:::note
Semantic aliases are what most components should use — `--space-inset`
communicates intent, `--space-4` just communicates size.
:::