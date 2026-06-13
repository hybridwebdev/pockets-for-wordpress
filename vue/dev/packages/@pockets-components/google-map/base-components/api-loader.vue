<template lang="pug">
slot( v-if="!error && $maps" ) 
div( v-if='error' ) Google maps has encountered an error. See console for details.
</template>
<script lang="ts" setup>

import { onMounted, toRaw, shallowRef, ref } from "vue"
import { Loader } from "@googlemaps/js-api-loader/"
import type { LoaderOptions } from "@googlemaps/js-api-loader"

import { context } from "../"
import type { google } from "../types/google-maps.ts"

let $maps = shallowRef< typeof google.maps >()
context.provide.maps( $maps )

interface $props extends LoaderOptions {
    /**
        Should be a valid google maps api key.
    */
    apiKey: string
}
let props = withDefaults( defineProps< $props >(), {
    
} )

let error = ref( )

onMounted( async () => {

    try {
        let $loader = new Loader( toRaw( props ) )
        $maps.value = ( await $loader .load() ).maps
    } catch( e: any ) {
        error.value = e
        console.log(e.message )
    }

} )

defineSlots<{
    /**
        Any google-map component can be used inside this slot.
    */
    default: {}
}>()
</script>