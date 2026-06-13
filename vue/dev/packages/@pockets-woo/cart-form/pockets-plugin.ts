//@ts-nocheck
import $ from "jQuery"
import { reactive } from "vue"

let init = ( app, $pockets ) => {

}

let createApp = ( app, $pockets ) => {
 
    app.directive( 'pockets-woo-cart-form-init', {

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