<template lang="pug">
div( ref='contentRef')
    slot( :marker='marker' )
        i( class="fa-solid fa-location-dot text-danger fs-36" )
</template>
<script lang='ts' setup>
import { onMounted, onUnmounted, ref, watch } from "vue"
import { context } from "../"
import type { google } from "../types/google-maps.ts"

let $maps = context.inject.maps() 
let $map = context.inject.map()

interface $props extends google.maps.marker.AdvancedMarkerElementOptions {
    /**
        Sets position of marker on map.
    */
    position: {
        lat: number
        lng: number
    }
}
const props = withDefaults( defineProps< $props >(), {
    
} )

let contentRef = ref()

let marker = ref()

let attachMarker = async () => {

    let { AdvancedMarkerElement } = await $maps.value?.importLibrary( "marker" ) as google.maps.MarkerLibrary

    marker.value = new AdvancedMarkerElement( {
        ...props,
        map: $map.value,
        content: contentRef.value
    } )

}

let destroyMarker = () => {
    marker.value.map = null
}

onMounted( attachMarker )
onUnmounted( destroyMarker )

watch( () => props, () => {
    destroyMarker()
    attachMarker()
}, { deep: true } )

defineSlots<{
    /**
        Can be used to override marker pin shown on map.
        @binding {object} Marker Instance of google map marker
    */
    default: {
        marker: {}
    }
}>()
</script>
