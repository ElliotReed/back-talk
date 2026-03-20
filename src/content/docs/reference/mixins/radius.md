---
title: Radius
description: radius() and semantic radius mixins — border radius from config.
---

All radius values derive from `$radius-base` in config. Changing the base
value scales the entire radius system proportionally.

## radius

Base mixin — apply any named radius size directly:
```scss
@include radius;          // md — default
@include radius(sm);
@include radius(lg);
@include radius(xl);
@include radius(2xl);
@include radius(none);    // 0
```

### Scale

| Size | Value |
|---|---|
| `none` | `0` |
| `sm` | `$radius-base × 0.5` |
| `md` | `$radius-base` |
| `lg` | `$radius-base × 1.5` |
| `xl` | `$radius-base × 2` |
| `2xl` | `$radius-base × 3` |

Default `$radius-base` is `6px` — override in `config/_config.scss`.

---

## Semantic mixins

Each element type has a mixin with a considered default radius:

### radius-input
```scss
@include radius-input;    // md
```

### radius-button
```scss
@include radius-button;   // md
```

### radius-card
```scss
@include radius-card;     // lg
```

### radius-modal
```scss
@include radius-modal;    // xl
```

### radius-tooltip
```scss
@include radius-tooltip;  // sm
```

### radius-badge
```scss
@include radius-badge;    // sm
```

:::note
Semantic radius mixins are used internally by `padding-box` semantic mixins —
`box-card` calls `radius-card` automatically. Use the radius mixins directly
only when you need radius without the padding.
:::