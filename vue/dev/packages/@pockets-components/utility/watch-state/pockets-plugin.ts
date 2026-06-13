import { defineAsyncComponent } from "vue"

let watcher = defineAsyncComponent( () => import("./index.vue") )

export let plugin:$pocketsPlugin = {
    createApp(app: any, $pockets: $pockets){
        app.component('pockets-watch-state', watcher )
    },
}
