---
title: Padding
description: padding-box() and semantic box mixins — padding and radius together.
---

Padding and radius are defined together — each semantic element type has
considered defaults that match its personality.

## padding-box

Base mixin — padding at a named size with optional radius:
```scss
@include padding-box;           // md size, no radius
@include padding-box("sm");     // sm size, no radius
@include padding-box("md", "md"); // md size, md radius
```

| Parameter | Default | Description |
|---|---|---|
| `$size` | `"md"` | Padding size — xs, sm, md, lg, xl, 2xl |
| `$radius` | `null` | Radius size — none, sm, md, lg, xl, 2xl |

### Size scale

Default padding values — handcrafted ratios landing on clean space tokens:

| Size | Block | Inline |
|---|---|---|
| `xs` | `--space-1` | `--space-2` |
| `sm` | `--space-2` | `--space-3` |
| `md` | `--space-3` | `--space-5` |
| `lg` | `--space-4` | `--space-6` |
| `xl` | `--space-5` | `--space-7` |
| `2xl` | `--space-6` | `--space-8` |

If `$box-ratio` is set in config to a value other than `2`, inline padding
is calculated as `block × ratio` instead of using the handcrafted values.

---

## Semantic mixins

Each element type has a mixin with considered defaults. Size is overridable:

### box-input
```scss
@include box-input;         // md padding, md radius
@include box-input("sm");   // sm padding, md radius
```

### box-button
```scss
@include box-button;        // md padding, md radius
@include box-button("sm");  // sm padding, md radius
@include box-button("lg");  // lg padding, md radius
```

### box-card
```scss
@include box-card;          // md padding, lg radius
@include box-card("lg");    // lg padding, lg radius
```

### box-badge
```scss
@include box-badge;         // sm padding, sm radius
```

### box-tooltip
```scss
@include box-tooltip;       // xs padding, sm radius
```

### box-modal
```scss
@include box-modal;         // lg padding, xl radius
```

---

:::note
The radius in each semantic mixin reflects the element's personality —
inputs and buttons use `md`, cards use `lg`, modals use `xl`. Override
the size parameter when needed but the radius default is intentional.
:::