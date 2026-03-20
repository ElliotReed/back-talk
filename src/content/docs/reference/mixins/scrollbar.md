---
title: Scrollbar
description: scrollbar() and scrollbar-themed() — custom scrollbar styling.
---

Two scrollbar mixins — neutral and branded. Both support float and track
modes, and handle Firefox via `scrollbar-width` and `scrollbar-color`.

Apply to the scrolling container element.

---

## scrollbar

Neutral scrollbar using neutral scale colors. Works anywhere without
introducing brand color into unexpected places:
```scss
@include scrollbar;               // 6px, float
@include scrollbar(8px);          // wider, float
@include scrollbar(6px, false);   // with visible track
```

| Parameter | Default | Description |
|---|---|---|
| `$width` | `6px` | Scrollbar width and height |
| `$float` | `true` | Float mode — transparent track |

---

## scrollbar-themed

Branded scrollbar using interactive color tokens. Use where the scrollbar
is a deliberate design element:
```scss
@include scrollbar-themed;               // 6px, float
@include scrollbar-themed(8px);          // wider, float
@include scrollbar-themed(6px, false);   // with visible track
```

| Parameter | Default | Description |
|---|---|---|
| `$width` | `6px` | Scrollbar width and height |
| `$float` | `true` | Float mode — transparent track |

---

## Float mode

Controls whether the track is visible:

**`$float: true`** — transparent track, thumb appears to float over content.
Clean, minimal. Default:
```
  │▓▓│   ← thumb only, no track visible
  │  │
  │  │
```

**`$float: false`** — visible track with inset shadow. More traditional,
track clearly shows scrollable area:
```
  │██│   ← visible track
  │██│
  │▓▓│   ← thumb
```

---

## Firefox

Firefox uses `scrollbar-width` and `scrollbar-color` which have limited
customisation. The `firefox-width()` helper maps pixel values to Firefox
keywords:

| Width | Firefox value |
|---|---|
| `0px` | `none` |
| `< 4px` | `thin` |
| `≥ 4px` | `auto` |

---

:::note
Scrollbar styling is applied in `base/_root.scss` via `@include scrollbar-themed`
on `html` — giving the entire page a consistent themed scrollbar by default.
Override per container by applying either mixin directly.
:::