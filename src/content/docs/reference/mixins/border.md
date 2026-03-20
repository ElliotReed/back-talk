---
title: Border
description: border() and border-ghost() — border mixins.
---

## border

Applies a border using token values by default. All parameters are optional:
```scss
@include border;                                    // default border
@include border(var(--color-interactive));          // custom color
@include border(var(--color-error), 2px);           // color and width
@include border(var(--color-border), 1px, dashed);  // all params
```

| Parameter | Default | Description |
|---|---|---|
| `$color` | `var(--color-border)` | Border color |
| `$width` | `1px` | Border width |
| `$style` | `solid` | Border style |

## border-ghost

A transparent border — same dimensions as a visible border but invisible.
Use when a border is needed for layout or to prevent margin collapse
without being visible:
```scss
@include border-ghost;        // 1px transparent
@include border-ghost(2px);   // custom width
```

| Parameter | Default | Description |
|---|---|---|
| `$width` | `1px` | Border width |

:::note
`border-ghost` is for explicit intent — when you need the space a border
occupies without the visual. If you just want no border, use `border: none`.
:::