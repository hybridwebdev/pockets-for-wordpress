import { defineAsyncComponent } from "vue"
let editor = defineAsyncComponent( () => import("./index.vue") )
export let plugin:$pocketsPlugin = {
    createApp: (app: any, $pockets: $pockets) => {
        app.component('pockets-wysiwyg', editor)
    },
}
 