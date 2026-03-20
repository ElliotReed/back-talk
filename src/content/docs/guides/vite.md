---
title: Vite
description: How to integrate Backtalk with a Vite project.
---

Backtalk works in any Vite-based project — plain Vite, SvelteKit, Nuxt, or any
other Vite-powered framework.

## Requirements

Sass 1.55.0 or higher:
```bash
npm install -D sass
```

## Vite Configuration

Not required — you can use relative paths directly. But `loadPaths` makes
imports cleaner across the project:
```js
// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve('./src/styles')]
      }
    }
  }
});
```

Without `loadPaths`:
```scss
@use '../../styles/mixins' as *;
```

With `loadPaths`:
```scss
@use 'mixins' as *;
```

## Global Import

Import the style system once in your root layout or entry file:
```js
// main.js
import './styles/index.scss';
```

Or in a root layout component:
```html
<!-- App.vue, +layout.svelte etc -->
<style>
  @import './styles/index.scss';
</style>
```

## Layer Declaration

The `_layers.scss` file handles the layer declaration automatically.
It is the first `@use` in `index.scss` so the declaration outputs before
any styles:
```scss
// styles/index.scss
@use 'layers';   // @layer reset, tokens, base, components, utilities;
@use 'reset';
@use 'tokens';
@use 'base';
```

No extra setup needed — unlike Astro, plain Vite does not strip the
declaration from Sass output.