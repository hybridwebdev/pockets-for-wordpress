import { create } from "./custom-element"
import { ElementBase, ElementDirective } from "./guard"
import { defineAsyncComponent } from "vue"
let component = defineAsyncComponent( () => import("./index.vue") )
/**
    <pockets-app-guard>

    This tag can be used to prevent vue from compiling a section of the dom. 
    Simply wrap your code in the tag.

    - When the dom is loaded, this will kick the tag and its contents to the document body.
    - Drops a place holder element where the tag was.
    - When vue is loaded, will replace the placeholder with the moved element.
*/
export let plugin:$pocketsPlugin = {
    
    init( app: any, $pockets: $pockets ){ 
        
        /**
            The order these are declared is important.
            The app guard must be defined first so that it hits the dom before
            the app does.
        */
        if ( !customElements.get( "pockets-app-guard" ) ) {
            customElements.define( "pockets-app-guard", ElementBase )  
        }
        create('pockets-app')

    },
    createApp( app ){

        app.directive( "pockets-app-guard", ElementDirective )
        app.component( 'pockets-app', component )
        
    }

}