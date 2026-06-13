//@ts-nocheck
import { formHandler } from "./form-handler"
import type { $formOptions } from "./types"

let init = ( app, $pockets ) => {
}
 
let createApp = ( app, $pockets ) => {

    app.directive( 'pockets-woo-form-handler', {

        mounted( el, binding ) {

            let $config:$formOptions = binding.value

            let handler = formHandler( $config )

            let eventHandler = event => {
                event.preventDefault()
                handler( event )
            }

            el['pockets-woo-form-handler'] = eventHandler

            el.addEventListener('submit',  eventHandler )

        },
        unmounted( el ) {
            el.removeEventListener('submit',  el['pockets-woo-form-handler'] )
        }

    } )
    
}

export let plugin:$pocketsPlugin = {
    createApp,
    init
}