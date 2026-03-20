---
title: Animation
description: Animation mixins — entrance, exit, and attention effects.
---

All animation mixins use motion tokens for duration and easing.
Durations zero automatically under `prefers-reduced-motion` via
`tokens/_motion.scss` — no per-animation media queries needed.

[See live demos →](/system/animations)

## Usage
```scss
@use 'mixins' as *;

.my-element {
  @include fade-up;
}

// custom duration
.my-element {
  @include fade-up(var(--duration-slow));
}

// custom duration and easing
.my-element {
  @include fade-up(var(--duration-slow), var(--ease-spring));
}
```

All mixins accept the same two optional parameters:

| Parameter | Default | Description |
|---|---|---|
| `$duration` | `var(--duration-normal)` | Animation duration |
| `$easing` | varies per mixin | Easing function |

---

## Fade

### soft-in
Simple opacity fade. The default entrance animation — use when motion
should be minimal.
```scss
@include soft-in;
```

### fade-up
Fades in while translating up from below.
```scss
@include fade-up;
```

### fade-in-top
Fades in while dropping down from above.
```scss
@include fade-in-top;
```

### fade-in-bottom
Fades in while rising from below.
```scss
@include fade-in-bottom;
```

### fade-in-right
Fades in while sliding in from the right.
```scss
@include fade-in-right;
```

### fade-left
Fades in while sliding from right to left.
```scss
@include fade-left;
```

### fade-out-top
Fades out while moving upward. Exit animation — defaults to `ease-in`
since exits should accelerate out.
```scss
@include fade-out-top;
```

---

## Scale

### scale-in-center
Scales in from zero. Clean entrance for modals, cards, and dialogs.
```scss
@include scale-in-center;
```

### scale-up
Scales from 50% with a slight overshoot. Springy entrance — uses
`ease-spring` by default.
```scss
@include scale-up;
```

### puff-in-center
Scales in from large with a blur. Dramatic entrance for overlays
and hero elements.
```scss
@include puff-in-center;
```

---

## Rotate

### swing-in-top
Rotates in from above on the X axis. Good for dropdowns and panels.
Defaults to `duration-slow`.
```scss
@include swing-in-top;
```

---

## Attention

### jello-horizontal
Elastic squash and stretch. Use for error states, invalid input,
or drawing attention to an element. No easing parameter — the
keyframe defines its own timing curve.
```scss
@include jello-horizontal;
```

---

## Utility

### turn-on-overflow
Transitions an element from `overflow: hidden` to `overflow: auto`.
Useful for expanding containers.
```scss
@include turn-on-overflow;
```

### winner-box-shadow-fade
Fades in a dramatic box shadow. Project-specific but included as
a useful pattern.
```scss
@include winner-box-shadow-fade;
```

---

:::note
The `crown-*` and `poster-*` keyframes in the animations file are
project-specific and have no corresponding mixins. Recreate with
appropriate values per component if needed.
:::