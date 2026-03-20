---
title: Button
description: Button mixins — variants, sizes, and shapes.
---

Button styles are mixins applied to any element. Base element styles handle
cursor, font, and focus — the mixin handles appearance.

The same mixin works on `<button>` and `<a>` elements. Each variant resets
`:visited` explicitly so link elements stay visually consistent.

[See live demos →](/system/buttons)

## Usage
```scss
@use 'mixins' as *;

.my-button {
  @include button-primary;
}

// combine variant with size and shape
.my-button {
  @include button-ghost;
  @include button-lg;
  @include button-pill;
}
```

---

## Variants

### button-primary
Main call to action. Use once per view.
```scss
@include button-primary;
```

- Background: `--color-interactive`
- Text: `--color-neutral-50`
- Hover: `--color-interactive-hover` + shadow depth 2
- Active: `--color-interactive-active`

### button-secondary
Supporting action. Lower visual weight than primary.
```scss
@include button-secondary;
```

- Background: `--color-surface`
- Text: `--color-text`
- Border: `--color-border`
- Hover: `--color-surface-raised` + shadow depth 2

### button-ghost
Minimal. Use on surfaces where a border is enough.
```scss
@include button-ghost;
```

- Background: transparent
- Text: `--color-interactive`
- Border: `--color-interactive`
- Hover: `--color-interactive-muted`
- No shadow

### button-danger
Destructive actions. Confirm before executing.
```scss
@include button-danger;
```

- Background: `--color-error`
- Text: white
- Hover: `--color-error-text`

---

## Sizes

Size mixins override padding and font size. Combine with any variant:
```scss
.my-button {
  @include button-primary;
  @include button-sm;
}
```

### button-sm
```scss
@include button-sm;
```

### button-lg
```scss
@include button-lg;
```

Default size is set by `box-button` in `button-base` — see
[Padding](/reference/mixins/padding) for the base values.

---

## Shapes

Shape mixins override border radius. Combine with any variant:

### button-pill
Full pill — `border-radius: 100vw`.
```scss
@include button-pill;
```

### button-icon
Square button for icon-only use. Equal padding on all sides, `aspect-ratio: 1`.
```scss
@include button-icon;
```

---

## button-base

The shared foundation used by all variants. Applied automatically — not
typically used directly. Handles display, alignment, spacing, shadow,
and transitions. Base element styles (cursor, font, focus-ring) are
applied separately in `base/elements/_form.scss`.
```scss
// rarely needed directly — use a variant instead
@include button-base;
```

---

:::note
`:visited` is reset in every variant so `<a>` elements styled as buttons
do not show browser visited link colour. The reset uses the same local
variables as the default state — making the relationship explicit in the code.
:::