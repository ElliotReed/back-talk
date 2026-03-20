---
title: Respond To
description: Responsive breakpoint mixins.
---

Breakpoint mixins driven by the `$breakpoints` map in config. All values
are in `em` — respecting user font size preferences.

Default breakpoints: `xs` 360px / `sm` 576px / `md` 768px / `lg` 992px / `xl` 1200px / `2xl` 1400px

Override or add breakpoints in `config/_config.scss` — see [Configuration](/guides/configuration).

---

## respond-to

Base mixin — use any breakpoint by name:
```scss
@include respond-to("md") {
  // min-width 768px
}

@include respond-to("md", "max") {
  // max-width 768px
}
```

| Parameter | Values | Default | Description |
|---|---|---|---|
| `$size` | any breakpoint key | required | Breakpoint name |
| `$min-or-max` | `"min"`, `"max"` | `"min"` | Min or max width |

---

## respond-from — min-width

Styles apply from the breakpoint upward:
```scss
@include respond-from-xs  { } // from 360px
@include respond-from-sm  { } // from 576px
@include respond-from-md  { } // from 768px
@include respond-from-lg  { } // from 992px
@include respond-from-xl  { } // from 1200px
@include respond-from-2xl { } // from 1400px
```

---

## respond-until — max-width

Styles apply below the breakpoint:
```scss
@include respond-until-xs  { } // until 360px
@include respond-until-sm  { } // until 576px
@include respond-until-md  { } // until 768px
@include respond-until-lg  { } // until 992px
@include respond-until-xl  { } // until 1200px
@include respond-until-2xl { } // until 1400px
```

---

## Semantic shortcuts

Opinionated shortcuts for common responsive patterns. Use `respond-to`,
`respond-from-*`, or `respond-until-*` for precise control:
```scss
@include respond-mobile  { } // until 576px  — mobile only
@include respond-tablet  { } // from 576px   — tablet and up
@include respond-desktop { } // from 992px   — desktop and up
@include respond-wide    { } // from 1400px  — wide screens
```

---

## Example
```scss
.my-component {
  font-size: var(--text-sm);

  @include respond-tablet {
    font-size: var(--text-md);
  }

  @include respond-desktop {
    font-size: var(--text-lg);
  }
}
```

:::note
Breakpoint values are in `em` so they scale with the user's browser font
size — a user with a larger base font gets the wider layout at a larger
physical screen size, which is usually what they need.
:::