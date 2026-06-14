import { defineAsyncComponent } from "vue"

let mapMarkers = defineAsyncComponent( () => import("./map-markers.vue") )
let mapOptions = defineAsyncComponent( () => import("./map-options.vue") )

export let plugin:$pocketsPlugin = {
    
    createApp(app: any, $pockets: $pockets){

        app.component( 'google-map-option-panel-map-markers', mapMarkers )
        app.component( 'google-map-option-panel-map-options', mapOptions )

    },

}
 