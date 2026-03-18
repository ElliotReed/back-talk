# Style System — Claude Context

## What this is
A portable Sass folder copied into projects. Not a framework.
Built in an Astro Starlight docs site with display pages alongside.

## Tech
- Astro + Starlight for docs
- Sass (modern — no @import, use @use/@forward)
- oklch for all color work
- CSS @layer for cascade control

## Layer order
```scss
@layer reset, tokens, base, components, utilities;
```

## Folder structure
styles/
  config/
    _defaults.scss      ← system defaults, never edited by projects
    _config.scss        ← project edits this only
    _resolved.scss      ← resolves overrides vs defaults, resolve() function
    _functions.scss     ← px-to-em() function
    index.scss          ← forwards _resolved
  colors/
    _accent.scss        ← derives accent from scheme, returns map
    _generated.scss     ← builds complete $colors map via color generators
    _neutral.scss       ← derives neutral endpoints from primary hue, returns map
    _feedback.scss      ← derives feedback colors with primary hue nudge, returns map
    _scale.scss         ← generate() mixin outputs --color-{name}-{step}, generate-neutral() mixin
  tokens/
    _colors.scss        ← iterates config.$colors, calls scale mixins, outputs --color-*
    _semantic.scss      ← maps scale to meaning, dark mode remaps here
    _typography.scss    ← merges fonts, generates --font-*, --text-*, --leading-*, --tracking-*
    _spacing.scss       ← generates --space-1 through --space-10 + named + semantic aliases
    _shadows.scss       ← no tokens, shadows are mixin-only
    _radius.scss        ← generates --radius-* from config.$radius-base
    index.scss
  reset/
    _reset.scss         ← Andy Bell modern reset
    index.scss
  base/
    _root.scss          ← html, body, color-scheme ← NEXT TO BUILD
    _fonts.scss         ← @font-face declarations (self-hosted)
    elements/
      _typography.scss  ← NEXT
      _links.scss
      _lists.scss
      _inline.scss
      _table.scss
      _form.scss
      _media.scss
      _misc.scss
      index.scss
    index.scss
  mixins/
    _shadow.scss        ← shadow(depth)shadow−inset(depth) shadow-inset(
depth)shadow−inset(depth), hardness/direction/offset-base from config
    _padding-box.scss   ← padding-box, box-input, box-button, box-card, box-badge, box-tooltip, box-modal
    _scrollbar.scss     ← scrollbar(width, $float), scrollbar-themed(
width, $float)
    _border.scss        ← border(color, $width, $style), border-ghost(
width)
    _focus-ring-ring-ring-ring-ring.scss         ← focus-ring(color),focus-ring−inset(color), focus-ring-inset(
color),focus-ring−inset(color) — handles :focus-ring/:focus-ring-visible internally
    _respond-to.scss    ← respond-to($size, $min-or-max), respond-from-*, respond-until-*, respond-mobile/tablet/desktop/wide
    _debug.scss         ← debug($color)
    _gradient.scss      ← gradient($color, $angle, $intensity) — @supports relative color syntax
    _flow.scss          ← flow($space), flow-prose
    index.scss          ← @forward all, used as @use "mixins" as *

Config variables (resolved)

$fonts             — map, merged defaults + overrides
$type-base         — 1rem default
$type-ratio        — 1.25 default (Major Third)
$space-unit        — 0.25rem default (4px)
$colors            — map, primary + generated accent/neutral/feedback
$color-scheme      — "complementary" default
$radius-base       — base radius value
$box-ratio         — block/inline padding ratio
$shadow-hardness   — 1-10 scale, default 5
$shadow-direction  — "none" | "left" | "right"
$shadow-offset-base — 2px default
$breakpoints       — map, xs/sm/md/lg/xl/2xl in em

Color system

Project sets $colors map with "primary" key minimum
$color-scheme drives accent generation
colors/ generators derive accent, neutral endpoints, feedback from primary
config/_generated.scss merges all into complete $colors map
tokens/_colors.scss iterates map, generates 50-950 scale for each color
tokens/_semantic.scss maps scale to meaningful tokens
Dark mode: only semantic tokens remap in :root

Spacing scale (10 consecutive steps)

Steps 1-4: granular 4px increments
Steps 5-10: progressive jumps
Named aliases: xs/sm/md/lg/xl/2xl
Semantic aliases: gutter/section/stack/inline/inset/inset-sm/inset-lg

Sass conventions

Double quotes always
No redundant as aliases (@use "sass:map" not @use "sass:map" as map)
No abbreviations except established conventions (xl, sm, md etc)
No #{} interpolation when passing values directly to CSS functions
@if @else blocks not if() ternary for multi-value conditions
rgba(0, 0, 0, $alpha) not rgba(0 0 0 / $alpha) — Sass doesn't parse modern syntax

Base elements strategy (STARTING NOW)

@layer base wrapping everything
Semantic tokens only, no hardcoded values
Minimal margins — containers own spacing via flow mixin
Mixins where appropriate (@include focus-ring, @include border etc)
No classes — raw elements only
html: font-size clamp, color-scheme
body: font-family, line-height, color, background, display flex column

Display pages (Astro)

src/pages/display/ — standalone pages outside Starlight
Use DisplayLayout.astro
Import styles via @use "../../styles/index.scss"
Import mixins via @use "../../styles/mixins" as *
Existing pages: colors.astro, shadows.astro, spacing.astro

Key decisions made

oklch everywhere for color
No tinted shadows — shadows are always black/rgba
Two scrollbar mixins: scrollbar (neutral) and scrollbar-themed (brand colors)
Float scrollbar default ($float: true)
No anchor mixin — goes directly in base/_links.scss
flow mixin resets element margins, container owns spacing
Breakpoints in em via px-to-em() helper
respond-to naming convention ties the whole API together