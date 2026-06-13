import { defineAsyncComponent } from "vue"

let editor = defineAsyncComponent( () => import("./editor/index.vue") )
let rootLoader = defineAsyncComponent( () => import("./root/loader/index.vue") )

export let plugin:$pocketsPlugin = {
    createApp(app: any, $pockets: $pockets){ 
        app.component( 'pockets-node-tree-editor', editor )
        app.component( 'pockets-tree-root-loader', rootLoader )
    }
}