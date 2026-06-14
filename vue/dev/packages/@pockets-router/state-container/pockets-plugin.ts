import { defineAsyncComponent } from "vue"

let routeState = defineAsyncComponent(() => import("./index.vue"))

export let plugin:$pocketsPlugin = {
    createApp(app: any, $pockets: $pockets) {
        app.component('pockets-route-state', routeState )
    },
}