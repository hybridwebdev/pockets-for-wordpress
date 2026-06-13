---
route: 'pockets vue/directives/hover-intent/about'
---

# v-hover-intent

A Vue 3 directive that improves hover behavior by detecting *intent* using mouse movement analysis. Instead of firing immediately on `mouseover`, it waits until the user’s cursor movement indicates deliberate interaction.
 
---

## Behavior Summary

- Mouse movement is tracked before triggering hover
- Only triggers `onEnter` when movement stabilizes
- Delays `onLeave` to prevent flicker
- Optionally supports keyboard focus
- Returns a runtime API for manual control (reset, options, remove)

---

## Notes

- Best used for menus, tooltips, and complex hover UIs
- Prevents accidental hover activation
- Improves UX in dense interactive layouts