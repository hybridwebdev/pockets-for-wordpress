import { defineAsyncComponent } from "vue"

let wpError = defineAsyncComponent( () => import("./index.vue") )

export let plugin:$pocketsPlugin = {
    createApp(app: any, $pockets: $pockets){
        app.component('pockets-wp-error', wpError )
    },
}
