---
title: "Fonts"
description: "How to configure and load fonts in the style system — external, self-hosted, and the token flow."
---

Fonts are configured in one place and flow through the system automatically. The config holds font stack definitions, the token layer generates custom properties from them, and the base layer applies them to HTML elements.

## Flow

```
config/_config.scss       ← project sets font stacks here
config/_defaults.scss     ← system fallbacks if not overridden
        ↓
tokens/_typography.scss   ← merges config + defaults, generates --font-* tokens
        ↓
base/_fonts.scss          ← @font-face declarations (self-hosted only)
base/_typography.scss     ← applies var(--font-body) etc to elements
```

## Font Roles

The system defines five font roles. Each maps to a specific use case:

| Token | Role |
|---|---|
| `--font-body` | Long-form reading, paragraphs |
| `--font-heading` | `h1`–`h6`, readable at all sizes |
| `--font-display` | Decorative, hero text, large headings |
| `--font-ui` | Buttons, labels, form elements, navigation |
| `--font-mono` | Code, `pre`, `kbd`, `samp` |

## Configuration

Override any or all roles in `config/_config.scss`. Unset roles fall back to system defaults.

```scss
// config/_config.scss
$font-overrides: (
  'body':    ('Patrick Hand', system-ui, sans-serif),
  'heading': ('Some Font', system-ui, sans-serif),
  'display': ('Permanent Marker', Impact, sans-serif),
  'ui':      (system-ui, sans-serif),
  'mono':    ('Fira Code', 'Courier New', monospace),
) !default;
```

You can also add new roles not in the defaults — the token generator will pick them up automatically:

```scss
$font-overrides: (
  'body':        ('Patrick Hand', system-ui, sans-serif),
  'handwriting': ('Caveat', cursive),  // new role
) !default;
```

This generates `--font-handwriting` alongside the standard tokens.

## Loading Fonts

Font configuration is separate from font loading. The config just references the font name — you choose how it gets loaded.

### External (Google Fonts)

Add the `<link>` tag to your Astro layout. No changes needed to the style system.

```astro
---
// layouts/BaseLayout.astro
---
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet">
</head>
```

### Self-Hosted

Add `@font-face` declarations to `base/_fonts.scss`. The base layer loads before typography is applied so the font is registered in time.

```scss
// base/_fonts.scss
@layer base {
  @font-face {
    font-family: 'Patrick Hand';
    src: url('/fonts/patrick-hand.woff2') format('woff2');
    font-display: swap;
  }
}
```

Place font files in `public/fonts/` — Astro serves the `public/` directory at the root.

```
public/
  fonts/
    patrick-hand.woff2
```

If using Google Fonts via `<link>`, `base/_fonts.scss` can be left empty or omitted entirely.

## Generated Tokens

`tokens/_typography.scss` merges defaults and overrides then generates custom properties on `:root`:

```scss
// tokens/_typography.scss
@use 'sass:map';
@use '../config/defaults' as d;
@use '../config/config' as c;

$fonts: map.merge(d.$font-defaults, c.$font-overrides);

@layer tokens {
  :root {
    @each $name, $stack in $fonts {
      --font-#{$name}: #{$stack};
    }
  }
}
```

Output:

```css
:root {
  --font-body:    'Patrick Hand', system-ui, sans-serif;
  --font-heading: system-ui, sans-serif;
  --font-display: 'Permanent Marker', Impact, sans-serif;
  --font-ui:      system-ui, sans-serif;
  --font-mono:    'Fira Code', 'Courier New', monospace;
}
```

## Applied in Base

`base/_typography.scss` applies the tokens to raw HTML elements. No `@use` needed — the tokens are already on `:root` by the time this layer runs.

```scss
// base/_typography.scss
@layer base {
  body {
    font-family: var(--font-body);
    line-height: var(--leading-normal);
    color: var(--color-text);
    background: var(--color-bg);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    line-height: var(--leading-tight);
  }

  code, pre, kbd, samp {
    font-family: var(--font-mono);
  }

  button, input, select, textarea {
    font-family: var(--font-ui);
  }
}
```

## Using Font Tokens in Components

Reference tokens directly — never reference Sass variables in components:

```scss
// components/_card.scss
@layer components {
  .card__title {
    font-family: var(--font-display);
    font-size: var(--text-xl);
  }
}
```