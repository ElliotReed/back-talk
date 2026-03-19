---
title: "Astro Guide"
description: "Integration with astro"
---

## Layer Declaration

### Astro

At the base element (layout)

---
import "../styles/index.scss";
---

The layer declaration must bypass Astro's style processing.
Add directly to the root layout as `is:inline`:
```html
<style is:inline>
  @layer reset, tokens, base, components, utilities;
</style>
```