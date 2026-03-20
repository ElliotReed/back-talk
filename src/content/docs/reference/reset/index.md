---
title: Reset
description: The CSS reset Backtalk uses and what it covers.
---

Backtalk uses [Andy Bell's modern CSS reset](https://piccalil.li/blog/a-more-modern-css-reset/)
as its foundation.

## What it covers

- Box sizing on all elements
- No default margins on common prose elements — `margin-block-end: 0` on `body`, headings, `p`, `figure`, `blockquote`, `dl`, `dd`
- `list-style: none` on `ul` and `ol` with `role="list"`
- Smooth scrolling respecting `prefers-reduced-motion`
- `display: block` on media elements
- `font: inherit` on form elements
- No default padding on body

## What base styles build on top of

The reset zeros `margin-block-end` on prose elements — `base/elements/_typography.scss`
then sets `margin-block-start` using spacing tokens to establish vertical rhythm.

Form elements inherit font via the reset — `base/elements/_typography.scss` then
explicitly sets `font-family: var(--font-ui)` on interactive elements.

Media elements get `display: block` and `max-width: 100%` from the reset —
`base/elements/_media.scss` builds on that with figure and figcaption styles.