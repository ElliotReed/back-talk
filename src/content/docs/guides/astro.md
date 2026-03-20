---
title: Astro
description: How to integrate Backtalk with an Astro project.
---

Backtalk works in any Vite-based project. This guide covers Astro-specific setup.

## Vite Configuration

Tell Vite where the styles folder is so `@use` statements resolve without
relative paths. In `astro.config.mjs`:
```js
import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: [path.resolve('./src/styles')]
        }
      }
    }
  }
});
```

With `loadPaths` set, any file in your project can import from the system
without relative paths:
```scss
@use 'mixins' as *;
@use 'tokens';
```

## Global Import

Import the style system once in your root layout frontmatter:
```astro
---
import "../styles/index.scss";
---
```

Using a frontmatter import rather than a `<style>` tag ensures Vite processes
the file correctly and respects the import order.

## Layer Declaration

Astro's style processing strips the `@layer` declaration from Sass files.
Add it directly to the root layout `<head>` as `is:inline` to bypass processing:
```astro
---
import "../styles/index.scss";
---

<html>
  <head>
    <style is:inline>
      @layer reset, tokens, base, components, utilities;
    </style>
  </head>
</html>
```

`is:inline` outputs the style tag exactly as written — no scoping, no bundling.
The declaration must appear before any stylesheet links so the browser knows
the layer priority order before any styles load.

## Component Styles

Astro scopes component styles by default — safe to use alongside the global
system. Component styles sit outside `@layer` which means they correctly
override layered base styles:
```astro
<style lang="scss">
  @use 'mixins' as *;

  .my-component {
    @include button-primary;
    @include shadow(2);
  }
</style>
```

## Starlight

If using Starlight for documentation, add global styles via the `customCss`
option in `astro.config.mjs`:
```js
starlight({
  customCss: ['./src/styles/index.scss'],
})
```

And add the layer declaration to your root layout or a custom `<head>`
component via Starlight's component override system.