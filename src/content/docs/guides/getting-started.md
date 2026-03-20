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

No npm install. No build step. Just Sass 1.55.0 or higher.

## Configuration

Edit `config/_config.scss` — the only file you need to touch:
```scss
$colors: (
  "primary": #1A73FF,
) !default;
```

The system derives everything else from that. See [Configuration](/guides/configuration)
for all available options.

## Project Setup

How you import and configure Backtalk depends on your project:

- [Astro](/guides/astro)
- [Vite](/guides/vite)