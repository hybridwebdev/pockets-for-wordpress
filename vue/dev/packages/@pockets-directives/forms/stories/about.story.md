---
route: 'pockets vue/directives/forms/about'
---

# Pockets Form Directives

These are a pair of Vue directives designed to simplify form handling and enable reactive, event-driven form submissions without relying on manual DOM plumbing or heavy state management.

## v-pockets-form-handler 

This directive attaches a submit listener to a form and replaces the default browser 
submission behavior with a custom callback. It serializes form data into a plain object and passes it to a user-defined handler, making it ideal for AJAX-driven forms.

## v-pockets-form-submit

This directive automatically triggers a form submission when specific input-related events occur on an element. It is designed for reactive forms where changes should immediately submit or revalidate the form without requiring a submit button.

When a configured event fires on the bound element, the directive finds the closest parent ```<form>``` and dispatches a native submit event.
 