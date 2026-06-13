//@ts-nocheck

import { shallowReactive } from "vue"
import { $pockets } from "@pockets-core"
import { $routerInstanceProps } from "./types"

type $options = {
    read: $routerInstanceProps['read']
}

export let useApi = ( options: $options ) => {

    let api = shallowReactive( {

        innerHTML: false,
        hash: 0,
        busy: false,

        fetch: async url => $pockets.crud( 'node-tree/router' ).initOnce( { url }, api.hash, url ).read( options.read ),
        
        sync: async url => {
            
            try {
                
                let res = await $pockets.crud.raceCache( api.fetch( url ), () => api.busy = true )

                if( res.document_title ) {
                    document.title = res.document_title
                }

                if( res.document_tree ) {
                    api.innerHTML = res.document_tree
                }
                
                return res

            } catch ( err ) {

                $pockets.toast.error( err.message )

            } finally {
                api.busy = false
            }

        }

    } ) 

    return api 

}