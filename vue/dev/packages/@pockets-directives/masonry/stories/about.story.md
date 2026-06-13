---
route: 'pockets vue/directives/masonry/about'
---

# v-pockets-masonry

This directive integrates Masonry layout behavior into elements using the [masonry Layout](https://www.npmjs.com/package/masonry-layout?client_id=1805037142.1778371202&session_id=1778371202) library.

It automatically initializes, updates, and cleans up a Masonry instance per element.

- Initializes layout on mount
- Recalculates layout on update
- Destroys instance on unmount
 
---

## Lifecycle Behavior

### mounted

- Merges default options with user-provided binding value
- Creates a new Masonry instance

---

### updated

- Calls `.layout()` on existing instance
- Recalculates item positions after DOM updates

---

### unmounted

- Calls `.destroy()`
- Cleans up event listeners and internal references

---

## Behavior Summary

- Automatically initializes Masonry on mount
- Re-runs layout on every Vue update
- Fully destroys instance on unmount
- Supports full Masonry configuration passthrough
- Stores instance directly on DOM element
 