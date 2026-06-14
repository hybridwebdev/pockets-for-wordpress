// @ts-nocheck
import { onUnmounted, onBeforeMount } from "vue"

const routerList = new Set()
let syncing = false

export let useSyncRouters = ( { router } ) => {

    let sync = async () => {

        if( !router.options.sync ) {
            return
        }
        
        if ( syncing ) {
            return 
        }

        syncing = true

        const snapshot = { ...window.location }

        const promises = []

        routerList.forEach( ( routerInstance ) => {

            if( router == routerInstance ) {
                return
            }

            promises.push( 
                routerInstance.$api.syncSelf( snapshot ) 
            ) 

        } )

        await Promise.all(promises)
        
        syncing = false

    } 

    routerList.add( router )

    router.afterEach( sync )

    onUnmounted( () => routerList.delete( router ) )
    
    onBeforeMount( async () => {

        syncing = true
        await router.$api.syncSelf( { ...window.location } )
        syncing = false

    } )  

}
 