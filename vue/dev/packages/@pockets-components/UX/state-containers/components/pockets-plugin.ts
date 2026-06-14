import { defineAsyncComponent } from "vue"
let provideState = defineAsyncComponent(() => import("./provide-state.vue"))
let subscribeData = defineAsyncComponent(() => import("./subscribe-data.vue"))
let tempState = defineAsyncComponent(() => import("./temp-state.vue"))

export let plugin:$pocketsPlugin = {
    createApp(app: any, $pockets: $pockets) {
        app.component('pockets-local-state', provideState)
        app.component('pockets-global-state', subscribeData)
        app.component('pockets-temp-state', tempState )
    },
}