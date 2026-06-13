import { $pockets } from "@pockets-core/"
import { reactive } from "vue"

export let init = function( $data: unknown ) {
    
    $pockets.data = reactive( $data )

    $pockets.plugins.init()
    
    const event = new CustomEvent( "pockets-ready", {
        bubbles: true,
        detail: $pockets,
    } )

    document.body.dispatchEvent( event )

}