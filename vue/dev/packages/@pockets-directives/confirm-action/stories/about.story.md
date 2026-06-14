---
route: 'pockets vue/directives/confirm-action/about'
---
# `v-confirm-action`

A Vue directive for requiring a second click to confirm an action within a timeout window.

1. First click enters confirmation mode
2. Second click within the delay confirms the action
3. If the delay expires:
   - `cancel()` is called
   - the directive resets automatically
4. If the element loses focus or the mouse leaves:
   - confirmation is cancelled
   - original state is restored
