---
title: "Architecture"
description: "Architecture"
---

A portable Sass folder, copied into projects. Not a framework.
Projects configure it, the system generates the output.

## Layer Order

@layer reset, tokens, base, components, utilities;

Each layer can only override layers below it. No specificity fights.

## Configuration

Projects edit one file — `config/_config.scss`.
The system generates color scales, spacing, and radius from those values.

## Tokens

Two levels:

- **Scale** — generated from config. `--color-primary-500`. Never used directly in components.
- **Semantic** — maps scale to meaning. `--color-interactive`, `--color-bg`, `--color-surface`. What components actually consume.

Sass variables are the build-time source of truth.
CSS custom properties are what the browser sees.

## Theming

Only semantic tokens remap for dark mode.
The scale never changes.
Components theme automatically because they reference meaning, not values.

## Mixins

For structural and behavioural patterns — focus-ring rings, layout, visibility.
Values inside mixins must reference tokens, not hardcoded values or Sass variables.

## Rule of Thumb

Config sets intent.
The system generates the scale.
Semantic tokens carry meaning.
Components consume meaning, not values.