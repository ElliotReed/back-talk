---
title: Getting Started
description: How to add Backtalk to a new project.
---

## Installation

Backtalk is a folder, not a package. Copy the `styles/` folder into your project:
```
your-project/
  src/
    styles/       ← paste here
```

## Updating Backtalk

Copy all system folders into `styles/` — **skip the `user/` folder**.
Your config and token overrides live there and must not be overwritten.

No npm install. No build step. Just Sass 1.55.0 or higher.

## Configuration

Edit `_user_/*` — the only files you need to touch:

`_config`

```scss
$colors: (
  "primary": #1A73FF,
) !default;
```

`_token-overrides`

```scss
--background-color: var(--new-color)
```

The system derives everything else from that. See [Configuration](/guides/configuration)
for all available options.

## Project Setup

How you import and configure Backtalk depends on your project:

- [Astro](/guides/astro)
- [Vite](/guides/vite)