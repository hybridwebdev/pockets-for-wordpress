import { defineAsyncComponent } from "vue"
let select = defineAsyncComponent( () => import("./components/select.vue") )
let option = defineAsyncComponent( () => import("./components/option.vue") )
export let plugin:$pocketsPlugin = {
    createApp: (app: any, $pockets: $pockets) => {
        app.component('pockets-fancy-select', select )
        app.component('pockets-fancy-select-option', option )
    },
}
 