// @ts-nocheck
import { ref } from 'vue'

export let useHoverHandler = (
    callback = ( event ) => {},
    interval = 100,
    hoverTimeout = 0,
) => {
    
    let hoveredElement = ref( null )

    function enter ( event ) {
        
        let target = event.target

        hoveredElement.value = target

        hoverTimeout = setTimeout( () => {
            if ( hoveredElement.value === target ) {
                callback( event )
            }
        }, interval )

    }

    let leave = ( event ) => {
        hoveredElement.value = null
        clearTimeout( hoverTimeout )
    }

    return {
        enter,
        leave
    }

}