---
route: 'pockets vue/directives/debouce/about'
---

# v-debounce

A directive that attaches debounced event listeners to DOM elements. Each event can be individually configured with a callback and will be wrapped in a debounce function to limit execution frequency.

---

## Supported Events

- input
- change
- select
- update

---

## Behavior

### beforeMount

- Reads `delay` (default 500ms)
- Iterates supported events
- If callback exists:
  - Wraps it with debounceFn
  - Attaches via addEventListener
  - Stores handler on binding

Each event gets its own debounced handler.

---

### unmounted

- Iterates supported events
- Removes event listeners
- Uses stored binding references

Prevents memory leaks.

---

## Notes

- Each event has its own debounce instance
- Delay is shared per directive instance
- Only configured events are attached