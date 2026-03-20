---
title: Gradient
description: gradient() — oklch surface gradient mixin.
---

Applies a subtle lightness gradient to a surface using oklch relative color
syntax. Creates depth without introducing a second color — the gradient is
derived from the input color itself.

Falls back to a flat background color in browsers that do not support
relative color syntax.

## Usage
```scss
@use 'mixins' as *;

.header {
  @include gradient(var(--color-header-background));
}
```

:::caution
Requires a resolved color value — not a CSS custom property.
CSS custom properties are resolved at runtime, relative color syntax
requires a value at parse time.
```scss
// ✅ resolved value
@include gradient(#1A73FF);
@include gradient(oklch(55% 0.2 250));

// ❌ custom property — will not work
@include gradient(var(--color-header-background));
```
:::

## Parameters

| Parameter | Default | Description |
|---|---|---|
| `$color` | required | Base color — must be a resolved value |
| `$angle` | from config | Gradient angle — defaults to shadow direction |
| `$intensity` | from config | Lightness variation — defaults to shadow hardness × 1.5 |

## Defaults from Config

The angle and intensity default to config values so gradient and shadow
share a consistent light source:

- **Angle** — derived from `$shadow-direction` via `shadow-direction-to-angle()`
- **Intensity** — `$shadow-hardness × 1.5`

| Shadow direction | Gradient angle |
|---|---|
| `"none"` | 180deg — top to bottom |
| `"left"` | 135deg — top-left to bottom-right |
| `"right"` | 225deg — top-right to bottom-left |

Override either at the call site:
```scss
// custom angle
@include gradient(#1A73FF, 90deg);

// custom intensity
@include gradient(#1A73FF, null, 20);

// both
@include gradient(#1A73FF, 90deg, 20);
```

## How It Works

The gradient runs from a lighter version of the color at `0%` to a darker
version at `100%`, with the original color anchored at `62%`. This mimics
natural light falling on a surface — brighter where light hits, darker
in shadow:
```
0%   — l + intensity × 0.01    lighter
10%  — l + intensity × 0.0067  slightly lighter
62%  — original color
90%  — l - intensity × 0.0067  slightly darker
100% — l - intensity × 0.01    darker
```