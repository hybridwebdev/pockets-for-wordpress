import { onMounted, onUnmounted } from 'vue'
import { $pockets } from "@pockets-core"

export let useSetup = ( api, router ) => {
/**
        Listen for certain events to force the route "de-caching" so it refreshes on next
        load.
    */
    let eventHandler = () => {
        api.hash++
    }


    onMounted( () => {
        $pockets.event.on('pockets/woo/cart/update', eventHandler )
    } )

    onUnmounted( () => {
        $pockets.event.off('pockets/woo/cart/update', eventHandler )
    } )   

}