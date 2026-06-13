import { defineAsyncComponent } from "vue"
let view = defineAsyncComponent( () => import("./index.vue") )

export let plugin:$pocketsPlugin = {

    createApp(app: any, $pockets: $pockets) {

        app.component('pockets-router-view', view )

    }
    
}
