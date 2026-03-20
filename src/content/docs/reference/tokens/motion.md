---
title: Motion
description: Motion tokens — durations, easing functions, and transition shorthands.
---

Motion tokens drive all animation and transition timing. Durations zero
automatically under `prefers-reduced-motion` — every component using
these tokens respects the user preference without extra media queries.

## Durations

| Token | Value | Usage |
|---|---|---|
| `--duration-fast` | `150ms` | Micro-interactions, hover states |
| `--duration-normal` | `250ms` | Default — most transitions |
| `--duration-slow` | `400ms` | Complex animations, entrances |

## Easing

| Token | Value | Usage |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.0, 0, 0.2, 1)` | Entrances — starts fast, slows down |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Exits — starts slow, speeds up |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Movement between states |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Springy overshoot — scale animations |

## Transition Shorthands

Combine duration and easing into a single token:

| Token | Value |
|---|---|
| `--transition-fast` | `var(--duration-fast) var(--ease-out)` |
| `--transition-normal` | `var(--duration-normal) var(--ease-out)` |
| `--transition-slow` | `var(--duration-slow) var(--ease-out)` |
```scss
.button {
  transition: background-color var(--transition-fast);
}
```

## Reduced Motion

Durations are zeroed in `tokens/_motion.scss` under `prefers-reduced-motion`.
No per-component handling needed:
```scss
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast:   0ms;
    --duration-normal: 0ms;
    --duration-slow:   0ms;
  }
}
```