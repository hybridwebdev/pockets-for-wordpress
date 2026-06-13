
// @ts-nocheck
import { useDebounceFn } from '@vueuse/core'
import { reactive } from "vue"
import emit from "tiny-emitter"

import { $pockets } from "@pockets-core"
 
import type { addProduct } from "./types"

let event = new emit()

let updateQuantity = useDebounceFn( async( hash: string, quantity: number  ) => {

    api.busy = true

    try {
        
        let res = $pockets.crud("woo/cart").init({}).update({
                itemQuantity: {
                    hash,
                    quantity, 
                },
            },
            false
        )
        
        api.hash++

        await res

        $pockets.event.emit( 'pockets/woo/cart/update' )

        return res

    } catch( err ) {
        throw new $pockets.toast.errorWrapper( err )
    } finally {
        api.busy = false
    }
    
}, 500 )

let showInterface = {

    event,

    show: ( key = 'all', timeout = 3000 ) => {

        api.open( key )
        
        setTimeout( () => api.close( key ), timeout )

    },

    close: ( key = 'all' ) => api.event.emit( 'cart-event', key, 'close' ),
    open:  ( key = 'all' ) => api.event.emit( `cart-event`, key, 'open' ),
    toggle:  ( key = 'all' ) => api.event.emit( 'cart-event', key, 'toggle' ),

}

export let api = reactive( {

    /**
        Load state injected via localize_script. 
    */    

    /**
        Hash is an incremented value that other components can watch to do things
        when the cart is updated. 
    */
    hash: 0,
    busy: false,
    ...showInterface,
    

    addItem: async ( product: addProduct ) => {
        
        api.busy = true;

        try {
            
            let res = $pockets.crud("woo/cart").init({}).update( product, false )

            api.hash++

            await res

            $pockets.event.emit("pockets/woo/cart/update")

            return res

        } catch ( err ) {
            throw new $pockets.toast.errorWrapper( err )
        } finally {
            api.busy = false
        }

    },
    
    removeItem: async ( removeItem: string ) => {
        
        api.busy = true
        
        try {

            let res = $pockets.crud("woo/cart").init({}).update(
                {
                    removeItem 
                },
                false
            )
            
            api.hash++

            await res

            $pockets.event.emit( 'pockets/woo/cart/update' )

            return res

        } catch( err ) {
            throw new $pockets.toast.errorWrapper( err )
        } finally {
            api.busy = false
        }

    },
    updateQuantity,

} )