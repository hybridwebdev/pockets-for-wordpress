export let useHandlers = ( { router } ) => {

   let clickHandler = (event) => {

        let target = event.target.closest('a')

        if ( !target ) {
            return
        }

        // let routerContainer = target.closest('[router-id]')
        
        // console.log(routerContainer)
        // if( routerContainer ) {

        //     let routerID = routerContainer.getAttribute('router-id')
        // }
        
        if( target.hasAttribute('history-mode') ) {

            if( router.options.historyMode != target.getAttribute('history-mode') ) {
                return
            }
             
        }
        
        if ( target.hasAttribute( 'target' ) || target.hasAttribute( 'router-link' ) ) {
            return
        }
        

        let href = target.getAttribute( 'href' )

        if ( !href ) {
            return
        }

        let resolved

        try {
            resolved = new URL(href, window.location.origin)
        } catch (e) {
            console.warn('Invalid URL:', href)
            return
        }

        const isExternal = resolved.origin !== window.location.origin

        if ( isExternal ) {
            window.location.href = resolved.href
            return
        }

        event.stopPropagation()
        event.preventDefault()

        router.$api.useLink( href ).navigate()
        
    }

    return { clickHandler }

}