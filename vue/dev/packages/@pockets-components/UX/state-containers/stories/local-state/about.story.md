---
route: 'pockets vue/components/ux/state-containers/local/about'
---

## Local State
#### ```pockets-local-state```

Local state is confined to a specific template instance, providing encapsulated data management for individual templates. This is particularly useful when you want to maintain state locally within a template without affecting the global state. Any properties you add to the `<pockets-local-state>` container will automatically be bound to the state object.

#### Using Local State in Vue Templates

```html
<pockets-app>
    <pockets-local-state videoid="S7SLep244ss" #default="{ state }">
        <div>
            <span>Video ID is: {{state.videoid}}</span>
            <input v-model="state.videoid">
        </div>
        <youtube :videoid="state.videoid"></youtube>
    </pockets-local-state>
</pockets-app>
```
 