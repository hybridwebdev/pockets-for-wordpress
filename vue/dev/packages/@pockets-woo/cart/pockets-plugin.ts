// @ts-nocheck

import { defineAsyncComponent } from "vue"

let wooCartWrapper = defineAsyncComponent( () => import("./wrapper.vue") )

import { api } from "./api"

let init = ( app, $pockets ) => {

    $pockets.woo = {
        ...$pockets.woo ?? {},
        cart: api
    }

}

let createApp = ( app, $pockets ) => {

    app.component( 'pockets-woo-cart', wooCartWrapper )
    
}

export let plugin:$pocketsPlugin = {
    init, 
    createApp
}