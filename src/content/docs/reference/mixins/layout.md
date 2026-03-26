---
title: Layout
description: flow(), stack(), and scroll-container() — layout pattern mixins.
---

## flow

Margin-based spacing for mixed content areas. Adds `margin-block-start`
to every sibling element:
```scss
@include flow;                    // default --space-stack
@include flow(var(--space-6));    // custom spacing
```

| Parameter | Default | Description |
|---|---|---|
| `$space` | `var(--space-stack)` | Space between siblings |

**Use for:** CMS content areas, mixed prose and component regions where
flex layout is not appropriate.

**Do not use for:** pure prose — headings and paragraphs have
`margin-block-start` set by base styles. UI components — use `stack` instead.

---

## stack

Flex column layout with consistent gap. Use for UI components where
elements have no natural margins:
```scss
@include stack;                    // default --space-stack
@include stack(var(--space-4));    // custom gap
```

| Parameter | Default | Description |
|---|---|---|
| `$space` | `var(--space-stack)` | Gap between children |

**Use for:** cards, forms, fieldsets, nav lists, any vertical UI component.

**Do not use for:** prose content — headings and paragraphs have natural
margins that `stack` will override.

---

## scroll-container

Overflow scroll container. Use on the parent of any element that may
exceed its container:
```scss
@include scroll-container;              // horizontal — default
@include scroll-container(y);          // vertical
@include scroll-container(both);       // both axes
@include scroll-container(x, smooth);  // smooth scrolling
```

| Parameter | Values | Default | Description |
|---|---|---|---|
| `$direction` | `x`, `y`, `both` | `x` | Scroll axis |
| `$behavior` | `auto`, `smooth` | `auto` | Scroll behavior |
```scss
// responsive table
.table-wrapper {
  @include scroll-container;
}

// scrollable panel
.sidebar {
  @include scroll-container(y);
}
```

:::note
`contain: inline-size` is applied when `$direction` is `x`. This is what
prevents the container's parent from expanding with the content — required
for horizontal scroll to work correctly in Safari.
:::

:::note[Choosing between flow and stack]
`stack` is for UI components with no natural margins — flex gap handles spacing.
`flow` is for mixed content where flex is not appropriate — margins handle spacing.
Prose needs neither — base element margins handle it automatically.
:::

## content-grid

A named-line CSS grid for full-bleed layouts with controlled content width.
Creates three zones — content, wide, and full — that child elements can
opt into using `grid-column`:
```scss
@include content-grid;
@include content-grid(var(--space-lg), 80ch, var(--space-md));
```

| Parameter | Default | Description |
|---|---|---|
| `$gutter` | `var(--space-md)` | Minimum edge padding |
| `$content` | `var(--content-width)` | Max content column width |
| `$gap` | `var(--space-lg)` | Row gap between children |

### Zones
```
[full-start]─────────────────────────────────────[full-end]
             [wide-start]─────────────[wide-end]
                      [content-start]─[content-end]
```

| Zone | Column | Usage |
|---|---|---|
| `content` | `content-start / content-end` | Body text, default content |
| `wide` | `wide-start / wide-end` | Images, callouts, wider blocks |
| `full` | `full-start / full-end` | Full-bleed heroes, dividers |

### Usage
```scss
.page {
  @include content-grid;

  // all children default to content width
  & > * {
    grid-column: content;
  }

  // opt specific elements into wider zones
  .hero {
    grid-column: full;
  }

  .pullquote {
    grid-column: wide;
  }
}
```

:::note
`--content-width` must be defined as a token or custom property. Add it
to your project tokens or pass a value directly as the `$content` parameter.
:::