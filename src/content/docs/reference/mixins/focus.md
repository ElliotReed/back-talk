---
title: Focus
description: focus-ring() and focus-ring-inset() — focus indicator mixins.
---

Apply to the element — the mixin generates `:focus` and `:focus-visible`
rules internally.
```scss
// ✅ correct — apply to the element
.button {
  @include focus-ring;
}

// ❌ wrong — mixin generates :focus-visible internally
.button:focus-visible {
  @include focus-ring;
}
```

## focus-ring

Standard focus ring with positive offset — appears outside the element boundary.
Use on most interactive elements.
```scss
@include focus-ring;
@include focus-ring(var(--color-accent));
```

| Parameter | Default | Description |
|---|---|---|
| `$color` | `var(--color-interactive)` | Outline color |

## focus-ring-inset

Inset focus ring — appears inside the element boundary. Use on elements
where an outer ring would be clipped, such as full-bleed images or
elements flush with the viewport edge.
```scss
@include focus-ring-inset;
@include focus-ring-inset(var(--color-accent));
```

| Parameter | Default | Description |
|---|---|---|
| `$color` | `var(--color-interactive)` | Outline color |

:::note
Both mixins suppress the default `:focus` outline and replace it with a
`:focus-visible` outline — keyboard users see the ring, mouse users do not.
:::