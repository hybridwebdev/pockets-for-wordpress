//@ts-nocheck
import $ from "jQuery"
import { reactive } from "vue"
import { $pockets } from "@pockets-core"

let init = ( app, $pockets ) => {

}

let createApp = ( app, $pockets ) => {
    
    app.directive( 'pockets-woo-checkout-form-init', {
        beforeMount( el ) {
        },
        created( el ) {
        },
        mounted( el ) {
        },
        unmounted(el) {
        }

    } )
    
}

export let plugin:$pocketsPlugin = {
    createApp,
    init
}