import { defineAsyncComponent } from "vue"
let component = defineAsyncComponent( () => import("./index.vue") )

export let plugin:$pocketsPlugin = {
    
    createApp( app ){

        app.component( 'pockets-render-markdown', component )
        
    }

}