import { defineAsyncComponent } from "vue"

let routerView = defineAsyncComponent( () => import("./index.vue") )

export let plugin:$pocketsPlugin = {

    createApp(app: any, $pockets: $pockets) {
        
        app.component('pockets-node-tree-router-view', routerView )
 
    },

}

 