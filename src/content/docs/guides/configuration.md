---
title: Configuration
description: How to configure Backtalk for your project.
---

Projects edit one file — `config/_config.scss`. Everything else is generated.

## How It Works

The config folder has four files:

| File | Purpose |
|---|---|
| `_defaults.scss` | System defaults — never edited |
| `_config.scss` | Project overrides — the only file you touch |
| `_resolved.scss` | Merges defaults and overrides into final values |
| `_functions.scss` | Helper functions used by config (`px-to-em` etc) |
| `index.scss` | Forwards resolved values — what the rest of the system imports |

When a token file needs a value it imports `config` and gets the resolved result —
it never touches defaults or config directly.

## Colors

Set a primary color — the minimum required configuration:
```scss
$color-overrides: (
  "primary": #1A73FF,
) !default;
```

The system derives accent, neutral scale, and feedback colors automatically
from the primary using oklch color space.

Override the generated accent or add extra colors — each gets a full 50–950 scale:
```scss
$color-overrides: (
  "primary":   #1A73FF,
  "accent":    #FF4B8B,  // override generated accent
  "tertiary":  #FF6B1A,  // extra — gets full scale
) !default;
```

## Color Scheme

Controls how the accent is derived from primary. Ignored if `"accent"` is set:
```scss
$color-scheme-override: "complementary" !default;
```

| Value | Description |
|---|---|
| `"complementary"` | 180° opposite — high contrast |
| `"analogous"` | 30° adjacent — harmonious |
| `"split-complementary"` | 150° from primary |
| `"monochromatic"` | Same hue, lower chroma and higher lightness |

## Fonts

Override any font role. Unset roles fall back to defaults.
Adding a new key generates a new `--font-*` token automatically:
```scss
$font-overrides: (
  "body":    (Inter, system-ui, sans-serif),
  "heading": (Georgia, "Times New Roman", serif),
  "mono":    ("Fira Code", "Courier New", monospace),
) !default;
```

| Role | Usage |
|---|---|
| `"body"` | Long-form reading, paragraphs |
| `"heading"` | h1–h6 |
| `"display"` | Decorative, hero text |
| `"ui"` | Buttons, labels, form elements |
| `"mono"` | Code, pre, kbd, samp |

## Font Weights

Replaces defaults entirely — list every weight your font actually loads.
The browser fakes unlisted weights silently:
```scss
$font-weight-overrides: (
  "thin":        100,
  "extra-light": 200,
  "light":       300,
  "regular":     400,
  "medium":      500,
  "semi-bold":   600,
  "bold":        700,
  "extra-bold":  800,
  "black":       900,
) !default;
```

Leaving this empty uses the defaults — `regular: 400` and `bold: 700`.

## Type Scale

`null` uses the system default:
```scss
$type-base-override:  null !default;  // default 1rem
$type-ratio-override: null !default;  // default 1.25 Major Third
```

| Ratio | Name | Character |
|---|---|---|
| 1.125 | Major Second | Subtle |
| 1.2 | Minor Third | Balanced |
| 1.25 | Major Third | Default |
| 1.333 | Perfect Fourth | Expressive |
| 1.618 | Golden Ratio | Dramatic |

## Spacing

Base unit for the spacing scale. All tokens are multiples of this value:
```scss
$space-unit-override: null !default;  // default 0.25rem (4px)
```

## Radius

Base radius value. All radius tokens derive from this:
```scss
$radius-base-override: null !default;  // default 6px
```

## Box Padding Ratio

Controls the block/inline padding ratio for `padding-box` mixins:
```scss
$box-ratio-override: null !default;  // default 2 — inline = block × 2
```

## Shadows
```scss
$shadow-hardness-override:    null !default;  // 1–10, default 5
$shadow-direction-override:   null !default;  // "none" | "left" | "right"
$shadow-offset-base-override: null !default;  // default 2px
```

Direction describes where the light source is — not where the shadow falls:

| Value | Light source | Shadow falls |
|---|---|---|
| `"none"` | Overhead | Straight down |
| `"left"` | From left | To the right |
| `"right"` | From right | To the left |

## Breakpoints

Merges with defaults — only set what you want to change or add.
Use `px-to-em()` to convert from px:
```scss
$breakpoint-overrides: (
  "lg":   62em,
  "menu": px-to-em(860px),
) !default;
```

Default breakpoints: `xs` 360px / `sm` 576px / `md` 768px / `lg` 992px / `xl` 1200px / `2xl` 1400px

## Full Example
```scss
$color-overrides: (
  "primary": #9333EA,
) !default;

$color-scheme-override: "analogous" !default;

$font-overrides: (
  "body":    (Inter, system-ui, sans-serif),
  "heading": (Georgia, "Times New Roman", serif),
  "ui":      (Inter, system-ui, sans-serif),
  "mono":    ("Fira Code", "Courier New", monospace),
) !default;

$type-ratio-override: 1.333 !default;

$shadow-hardness-override:  6      !default;
$shadow-direction-override: "left" !default;
```