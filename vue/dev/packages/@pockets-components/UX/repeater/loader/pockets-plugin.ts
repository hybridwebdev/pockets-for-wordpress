import { defineAsyncComponent } from "vue"
let loader = defineAsyncComponent( () => import("./loader.vue") )
export let plugin:$pocketsPlugin = {
    createApp: (app: any, $pockets?: $pockets) => {
        app.component('pockets-ux-repeater', loader )
    },
}
 