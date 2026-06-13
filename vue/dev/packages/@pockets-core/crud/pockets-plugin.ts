// @ts-nocheck

import { $pockets } from "@pockets-core"
import { useCrudLoader, useCrudConnection } from "./use-crud"
import { defineAsyncComponent } from 'vue'

let component = defineAsyncComponent(() => import('./component/index.vue') )
export let plugin:$pocketsPlugin = {

    createApp( app: $pocketsApp, $pockets: $pockets){
        app.component('pockets-crud-connection', component)
    },

    init: ( app: $pocketsApp, $pockets: $pockets ) => {

        $pockets.crud = useCrudConnection( useCrudLoader( $pockets.data.crud ) )

    }
    
}