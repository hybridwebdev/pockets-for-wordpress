import { defineAsyncComponent } from "vue"
let fancyInput = defineAsyncComponent( () => import("./index.vue") )
export let plugin:$pocketsPlugin = {
    createApp: (app: any, $pockets: $pockets) => {
        app.component('pockets-fancy-input', fancyInput )
    },
}
 