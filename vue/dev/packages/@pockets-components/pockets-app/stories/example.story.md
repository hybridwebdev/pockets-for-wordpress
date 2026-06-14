---
route: 'pockets vue/app-instances'
title: 'Creating an app instance'
---
## Creating an APP

In Pockets VUE, integration with VUE is done through the use of a custom element: `<pockets-app>`. This custom element acts as a container, automatically spawning Vue instances on the element. The content inside the `<pockets-app>` tag is parsed using Vue, enabling the utilization of components, state, and other Vue syntax like directives.

To initiate a Vue app, simply enclose your content within the `<pockets-app>` tag. This signifies to Pockets VUE that the content should be processed and rendered as a Vue instance.

```html
<pockets-app>
    <!-- Your Vue app content goes here -->
</pockets-app>
```

#### Using Components and Vue Syntax

Inside the `<pockets-app>` tag, you can utilize Vue components, state, and other Vue syntax. This allows for dynamic and interactive content on your site. Below are examples demonstrating the usage of components and directives within a Pockets VUE app:

#### Using Components

```html
<pockets-app>
    <my-custom-component></my-custom-component>
</pockets-app>
```

#### Applying Vue Directives

```html
<pockets-app>
    <div v-if="isUserLoggedIn">
        Welcome, {{username}}!
    </div>
    <div v-else="">
        Please log in.
    </div>
</pockets-app>
```
