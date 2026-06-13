
import { $pockets } from "@pockets-core"
import type { $formOptions } from "./types"

import serialize  from 'form-serialize'

export let formHandler = ( $formOptions: $formOptions ) => {
    
    let { 
        error = null, 
        success = null, 
        fail = null,
        action
    } = $formOptions

    if( typeof fail !='function' ) {
        fail = err => new $pockets.toast.errorWrapper( err ).toast()
    } 

    let createHandler = ( toastHandler: "error" | "success", handler ) => ( res ) => {
 
        if( typeof handler == 'function') {
            return handler( res )
        }

        if( typeof handler == 'string' ) {
            return $pockets.toast[toastHandler].call( null, handler )
        }

        /**
            Changed on 04/05/2026. 
            Notices are not handled by a different abstraction.
        */
        if( !handler ) {
            return;
            //return $pockets.toast[toastHandler].call( null, res.message )
        }

    }

    let handlers = {
        error: createHandler( "error", error ),
        success: createHandler( "success", success ),
        fail,
    }

    let actionMap = {
        
        
        "cart.add.variable": async ( FormData ) => {
            
            /**
                Plucking properties that starts with attribute and passing is as 
                the variation so WOO can add variations properly. 
            */
            let variation = Object.fromEntries( 
                Object.entries( FormData ).filter( ( [ k ] ) => k.startsWith( 'attribute' ) )
            )

            try {

                let res = await $pockets.woo.cart.addItem( {
                    
                    addItem: {
                        ...FormData, 
                        variation
                    }
                    
                } )

                if( res.addItem.success ) {
                    handlers.success( res.addItem )
                }

                if( !res.addItem.success ) {
                    handlers.error( res.addItem )
                }

            } catch( err ){
                handlers.fail( err )
            } 

        },

        "cart.add.simple": async ( FormData ) => {

            try {
            
                let res = await $pockets.woo.cart.addItem( {
                    addItem: FormData
                } )

                if( res.addItem.success ) {
                    handlers.success( res.addItem )
                }

                if( !res.addItem.success ) {
                    handlers.error( res.addItem )
                }

            } catch( err ){
                handlers.fail( err )
            }

        },

        "cart.add.grouped": async( formData ) => {

            let promiseHandler = async( [ product_id, quantity ] ) => {
                
                try {
                    
                    let res = await $pockets.woo.cart.addItem( {
                        addItem: {
                            product_id, 
                            quantity,
                        }
                    } )

                    if( res.addItem.success ) {
                        handlers.success( res.addItem )
                    }

                    if( !res.addItem.success ) {
                        handlers.error( res.addItem )
                    }

                    return res

                } catch( err ) {
                    handlers.fail( err )
                }

            }

            return await Promise.all( Object.entries( formData.quantity ).map( promiseHandler ) )

        }

    }
    
    return async e => {

        let cb = actionMap[action] ?? false

        if( !cb ) {
            return $pockets.toast.error( `Invalid form action ${action}` )
        }

        let data = serialize( e.target, { hash: true } ) 
        
        return await cb( data )
         
    }

}