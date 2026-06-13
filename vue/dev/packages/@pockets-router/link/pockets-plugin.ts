import { defineAsyncComponent } from "vue"
let RouterLink = defineAsyncComponent( () => import("./index.vue") )

export let plugin:$pocketsPlugin = {
    createApp(app: any, $pockets: $pockets) {
        app.component('pockets-router-link', RouterLink )
    }
}
