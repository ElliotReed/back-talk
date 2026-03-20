---
title: Debug
description: debug() — visual debugging mixin.
---

Adds a visible border to an element for layout debugging. Remove before committing.

## Usage
```scss
@use 'mixins' as *;

.my-element {
  @include debug;
}
```

| Parameter | Default | Description |
|---|---|---|
| `$color` | `var(--color-error)` | Border color |
```scss
@include debug;                           // red border
@include debug(var(--color-interactive)); // blue border
```

:::caution
For development only. Remove before committing.
:::