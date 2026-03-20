---
title: Shadow
description: shadow() and shadow-inset() — depth shadow mixins.
---

Two shadow mixins with a 1–5 depth scale. Shadow appearance is driven by
config — hardness, direction, and offset base all affect the output.

[See live demos →](/system/shadows)

---

## shadow

Applies a two-layer box shadow — a tight top shadow and a softer bottom
shadow that combine to create convincing depth:
```scss
@include shadow;       // depth 2 — default
@include shadow(1);    // subtle
@include shadow(3);    // medium
@include shadow(5);    // dramatic
```

| Parameter | Default | Description |
|---|---|---|
| `$depth` | `2` | Shadow depth — 1 to 5 |

---

## shadow-inset

Inset shadow — depth pressed into the surface. Use for inputs, wells,
and pressed states:
```scss
@include shadow-inset;     // depth 2 — default
@include shadow-inset(1);  // subtle
@include shadow-inset(3);  // deep
```

| Parameter | Default | Description |
|---|---|---|
| `$depth` | `2` | Shadow depth — 1 to 5 |

---

## Config

Shadow appearance is controlled by three config values:

| Config | Default | Effect |
|---|---|---|
| `$shadow-hardness` | `5` | 1–10 — controls blur radius and opacity |
| `$shadow-direction` | `"none"` | Light source direction |
| `$shadow-offset-base` | `2px` | Base offset amount |

### Hardness

Controls how sharp or soft the shadow appears:

| Value | Character |
|---|---|
| 1–3 | Soft, diffuse — ambient light |
| 4–6 | Balanced — default range |
| 7–9 | Hard, defined — directional light |
| 10 | No blur — solid cutout shadow |

### Direction

Where the light source is — not where the shadow falls:

| Value | Light source | Shadow falls |
|---|---|---|
| `"none"` | Overhead | Straight down |
| `"left"` | From left | To the right |
| `"right"` | From right | To the left |

---

## How It Works

Each depth level produces two shadow layers:

- **Top shadow** — tighter, less blur, negative spread. Simulates the
  sharp shadow close to the element.
- **Bottom shadow** — softer, more blur, larger offset. Simulates the
  diffuse shadow further from the element.

Both layers use only `rgba(0, 0, 0, alpha)` — no color in shadows,
ensuring they work correctly on any background color.

:::note
Shadows are always black — tinted shadows are not supported by design.
Black shadows work on any surface color and across light and dark modes
without remapping.
:::