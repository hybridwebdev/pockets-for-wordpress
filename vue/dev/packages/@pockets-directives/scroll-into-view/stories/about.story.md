---
route: 'pockets vue/directives/scroll-into-view/about'
---

# v-scroll-into-view

A Vue 3 directive that automatically scrolls an element into view within a scrollable parent container when mounted or updated.

It supports flexible parent targeting, smooth scrolling, and alignment control.

---

## Directive Overview

This directive:

- Finds a scrollable parent container
- Calculates element position relative to that parent
- Scrolls the parent so the element is visible
- Supports alignment modes: `start`, `center`, `end`
- Can be enabled/disabled dynamically
 
---

## Purpose

This directive ensures that an element is automatically scrolled into view inside its parent container when:

- It is mounted
- It becomes active/selected via reactive update

---
 
## How It Works

### Parent Resolution

The directive resolves the scroll container in this order:

1. `HTMLElement` reference
2. CSS selector string (`.class`, `#id`, etc.)
3. `closest()` match (for class selectors)
4. `document.querySelector()`
5. Fallback: `el.parentElement`

---

### Scroll Calculation

It computes:

- Element position inside parent
- Adjusts based on scroll offset
- Applies alignment rules (`start`, `center`, `end`)
- Calls `parent.scrollTo()`

---

### Mount Behavior

- Waits for `mountedDelay` (default 100ms)
- Checks `enabled`
- Scrolls element into view inside parent

---

### Update Behavior

- Compares previous vs current `enabled` state
- Only triggers scroll when toggled ON
