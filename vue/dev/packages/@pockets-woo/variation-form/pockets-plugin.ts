//@ts-nocheck
import $ from "jQuery"
import { reactive } from "vue"

let init = ( app, $pockets ) => {
    
    let api = reactive( {
        selected: null,
    } )

    $pockets.woo.variation_form = api

}

let createApp = ( app, $pockets ) => {

    let setVariation = ( e, variation ) =>  {
        $pockets.woo.variation_form.selected = { ...variation } 
    }
    
    let reset = () => $pockets.woo.variation_form.selected = null

    app.directive( 'pockets-woo-variation-form-init', {

        mounted( el ) {
            
            if ( typeof $.fn.wc_variation_form !== 'function' ) {
                console.error( "Error in woo-variation-form directive: wc_variation_form does not exist" )
                return
            }

            $( el ).wc_variation_form()

            $( el ).on( 'found_variation', setVariation ) 
            $( el ).on( 'reset_data', reset ) 

        },
        unmounted(el) {

            $( el ).off( 'found_variation', setVariation ) 
            $( el ).off( 'reset_data', reset ) 
            
        }

    } )
    
}

export let plugin:$pocketsPlugin = {
    createApp,
    init
}