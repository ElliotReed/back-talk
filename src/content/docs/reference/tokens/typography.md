---
title: Typography
description: Typography tokens — font families, type scale, line heights, tracking, and weights.
---

Generated from `$type-base` and `$type-ratio` using a modular scale.
Font families and weights generated from config maps.

[See live demos →](/system/typography)

## Font Families

Generated from `$fonts` merged with `$font-overrides`. One token per role:

| Token | Default | Usage |
|---|---|---|
| `--font-body` | Georgia | Long-form reading, paragraphs |
| `--font-heading` | system-ui | h1–h6 |
| `--font-display` | Impact | Decorative, hero text |
| `--font-ui` | system-ui | Buttons, labels, form elements |
| `--font-mono` | Courier New | Code, pre, kbd, samp |

Adding a new key to `$font-overrides` generates a new `--font-*` token automatically.

## Type Scale

Generated from `$type-base` (default `1rem`) and `$type-ratio`
(default `1.25` — Major Third):

| Token | Scale step | Default value |
|---|---|---|
| `--text-xs` | -2 | ~0.64rem |
| `--text-sm` | -1 | ~0.8rem |
| `--text-md` | 0 | 1rem |
| `--text-lg` | +1 | ~1.25rem |
| `--text-xl` | +2 | ~1.563rem |
| `--text-2xl` | +3 | ~1.953rem |
| `--text-3xl` | +4 | ~2.441rem |
| `--text-4xl` | +5 | ~3.052rem |

Change `$type-ratio-override` in config to scale the entire system proportionally.

## Line Heights

| Token | Value |
|---|---|
| `--leading-none` | `1` |
| `--leading-tight` | `1.25` |
| `--leading-snug` | `1.375` |
| `--leading-normal` | `1.5` |
| `--leading-relaxed` | `1.625` |
| `--leading-loose` | `1.75` |

## Letter Spacing

| Token | Value | Usage |
|---|---|---|
| `--tracking-tight` | `-0.02em` | Large display text |
| `--tracking-normal` | `0em` | Body copy |
| `--tracking-wide` | `0.05em` | Uppercase labels |
| `--tracking-wider` | `0.1em` | Spaced caps, badges |

## Font Weights

Generated from `$font-weights` merged with `$font-weight-overrides`.
Defaults:

| Token | Value |
|---|---|
| `--font-weight-regular` | `400` |
| `--font-weight-bold` | `700` |

:::caution
Only add weights to `$font-weight-overrides` that your font actually loads.
The browser fakes unlisted weights silently.
:::