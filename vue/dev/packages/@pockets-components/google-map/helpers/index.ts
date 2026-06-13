// @ts-nocheck
export let center_markers = ( markers ) => {
    let avs = markers.reduce( ( collector, { position } ) => {
        return {
            lat: collector.lat + parseFloat( position.lat ),
            lng: collector.lng + parseFloat( position.lng ),
        }
    }, { lat: 0, lng: 0 } )
    return {
        lat: parseFloat( avs.lat / markers.length ),
        lng: parseFloat( avs.lng / markers.length )
    }
}