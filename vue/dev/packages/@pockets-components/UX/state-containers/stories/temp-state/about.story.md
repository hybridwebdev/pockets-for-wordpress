---
route: 'pockets vue/components/ux/state-containers/temporary/about'
---

## Temporary State
#### ```pockets-temp-state```

Temporary state, works sort of like the local state container, except that it does one-way binding. It takes props you give it and creates state from it. 
It provides an api with the temp ```state```, as well an ```update``` and ```cancel```.

To pass in data, you use the ```v-model:select``` property. 

When you fire the ```update``` method, local changes are emitted to update the state passed in. If you fire the ```cancel``` method, the temp state will revert back to the current state passed in.

The api also has a ```hasChanges<boolean>``` property that returns true when the temp state has been changed. This will reset to false when the ```update``` or ```cancel``` methods are called.

#### Using Temp State in Vue Templates

```html
<pockets-app>
    <pockets-temp-state 
        v-model:select="{videoid: 'S7SLep244ss'}" 
        #default="{ state, update, cancel, hasChanges }"
    >
        <div>
            <span>Video ID is: {{state.videoid}}</span>
            <input v-model="state.videoid">
        </div>
        <youtube :videoid="state.videoid"></youtube>
        <button @click='update' :disabled='!hasChanges'>Update</button>
        <button @click='cancel' :disabled='!hasChanges'>Cancel</button>
    </pockets-temp-state>
</pockets-app>
```
 