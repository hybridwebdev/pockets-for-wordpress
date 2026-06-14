import { defineAsyncComponent } from "vue"

let mapLoader = defineAsyncComponent( () => import('./map-loader.vue') )

export let plugin:$pocketsPlugin = {
    
    createApp(app: any, $pockets: $pockets){

        app.component( 'google-map-loader', mapLoader )

    },

}