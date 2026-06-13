import { defineAsyncComponent } from "vue"

let youtube = defineAsyncComponent( () => import("./index.vue") )

export let plugin:$pocketsPlugin = {
    createApp(app: any, $pockets: $pockets){
        app.component('youtube', youtube )
    },
}
