<template lang="pug">
div( ref='containerRef' class='map-container')
    template()
        slot( v-if='$map' )
</template>
<script setup lang='ts'>
import { shallowRef, onMounted, markRaw, watch, ref, computed } from "vue"
import { context } from "../" 
import type { google } from "../types/google-maps.ts"

/**
    Google throws a fit for some reason if the template tag is removed.
    You can pass markers or any other google map object that utilize the map instance 
    in through the slot.
*/

let $maps = context.inject.maps()

let $map = shallowRef< google.maps.Map >()
context.provide.map( $map )

let containerRef = ref()

interface $props extends google.maps.MapOptions {
    /**
        Controls map zoom.
    */
    zoom?: number
    /**
        ID of map. 
    */
    mapId?: string
}

let props = withDefaults( defineProps< $props >(), {
    mapId: "MAP_ID", 
    zoom: 20,
    center: () => ( {
        lat: 0,
        lng: 0 
    } ),
    draggable: true,
} )

/**
    Remove undefined props.
*/
let computedProps = computed( () => {
    return Object.fromEntries( Object.entries( props ).filter( ( [_, v ] ) => v !== undefined ) )
} ) 

watch( () => computedProps, () => {
     $map?.value?.setOptions( { ...computedProps.value } )
}, { deep: true } ) 

onMounted( async () => {
    let { Map } = $maps.value as typeof google.maps
    $map.value = markRaw( new Map( containerRef.value, { ...computedProps.value } ) )
} )

defineSlots<{
    /**
        Accepts any map elements, such as google-map-advanced-marker.
    */
    default: {}
}>()
</script>
<style scoped lang="scss">
.map-container{
    height: 25vh
}
</style>