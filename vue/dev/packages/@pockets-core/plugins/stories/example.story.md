---
group: 'pockets-vue'
title: 'Adding a Plugin'
---

## Adding a plugin

To add a plugin, create a file called ```pockets-plugin.ts``` anywhere in your project folder.
When Pockets runs, it will search for all files with this name, and run them during 2 different
hooks.

- ```createApp``` 
    Called every time a VUE app instance is created. You can do things like install 3rd party plugins, or register new components.
- ```init```
    Called once when ```$pockets.init``` is called. This happens once when
    the ```$pockets``` library is first loaded. Pockets does not have an APP instance during this hook, so do not use the app argument. This hook is useful for modifying or creating global data or one time
    setup routines.

###### Example ```pockets-plugin.ts``` file

```ts
import { defineAsyncComponent } from "vue"

let component = defineAsyncComponent( () => import("./my-component.vue") )

export let plugin:$pocketsPlugin = {
    createApp(app: any, $pockets: $pockets){ 
        app.component( 'my-new-component', component )
    },
    init: (app: any, $pockets: $pockets) => { 
    }
}
```