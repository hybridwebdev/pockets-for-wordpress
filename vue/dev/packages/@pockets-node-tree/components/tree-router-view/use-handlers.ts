import { useHoverHandler } from "@pockets-core/utils/hover-handler/use-hover-handler"

export let useHandlers = ( api, router ) => {

    let enterHandler = ( event ) => {

        let routerID = event.target.closest('[router-id]').getAttribute('router-id')

        if( routerID != router.options.routerID ) {
            return
        }

        let target = event.target.closest( 'a' ) 
 
        if ( target ) {

            if ( new URL( target.href ).origin !== new URL( window.location.href ).origin ) {
                return
            }
            
            let { route, url } = router.$api.useLink( target.href ) 

            if ( ( route?.meta['refresh-page'] ?? false ) === true ) {
                return
            }

            api.fetch( url.toString() ).catch( e => {} )
            
        }

    }

    let hoverHandler = ( delay = 50 ) => useHoverHandler( enterHandler, delay )

    return { hoverHandler }

}