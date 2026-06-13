---
route: 'pockets vue/components/ux/state-containers/global/about'
---

## Global State
##### ```pockets-global-state```

Global state serves as shared data accessible across any components in any app instance. This shared state is particularly useful for synchronization among different parts of your application.

#### Injecting Global State

You can add data that is automatically added to the client and is stored under a global variable as `$pockets.data.your_state_key`.

```php
<?php 
\pockets::inject_data('my_global_state', [
    'videoid' =--> "S7SLep244ss"
]);
```

#### Using Global State in Vue Templates

```html
<pockets-app>
    <pockets-global-state #default="{ my_global_state }">
        <div>
            <span>Foo is: {{my_global_state.videoid}}</span>
            <input v-model="my_global_state.videoid">
        </div>
        <youtube :videoid="my_global_state.videoid"></youtube>
    </pockets-global-state>
</pockets-app>
```
 
