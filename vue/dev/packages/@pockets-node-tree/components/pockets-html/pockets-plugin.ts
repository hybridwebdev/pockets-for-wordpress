import { defineAsyncComponent } from "vue"
let pocketsHtml = defineAsyncComponent( () => import("./index.vue") )
export let plugin:$pocketsPlugin = {
    createApp: (app: any, $pockets: $pockets) => {
        app.component('pockets-html', pocketsHtml)
    },
}
 