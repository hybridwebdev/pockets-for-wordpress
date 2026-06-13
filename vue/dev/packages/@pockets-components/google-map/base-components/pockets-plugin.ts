import { defineAsyncComponent } from "vue"

let apiLoader = defineAsyncComponent( () => import("./api-loader.vue") )
let autoComplete = defineAsyncComponent( () => import("./auto-complete.vue") )
let mapContainer = defineAsyncComponent( () => import("./map-container.vue") ) 
let advancedMarker = defineAsyncComponent( () => import("./advanced-marker.vue") )

export let plugin:$pocketsPlugin = {
    
    createApp(app: any, $pockets: $pockets){

        /** 
            Base components
        */
        app.component( 'google-map-api-loader', apiLoader )
        app.component( 'google-map-auto-complete', autoComplete )
        app.component( 'google-map-container', mapContainer )
        app.component( 'google-map-advanced-marker', advancedMarker )

    },

}
 