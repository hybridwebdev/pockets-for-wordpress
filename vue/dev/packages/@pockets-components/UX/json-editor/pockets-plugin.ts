import { defineAsyncComponent } from "vue"
let component = defineAsyncComponent(() => import("./loader.vue"))

export let plugin:$pocketsPlugin = {
    createApp(app: any, $pockets: $pockets) {
        app.component('pockets-ux-json-editor', component)
    },
}