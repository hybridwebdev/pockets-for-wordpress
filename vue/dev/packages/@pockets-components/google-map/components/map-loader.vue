<template lang="pug">
div()
    google-map-api-loader(
        v-bind='loaderOptions'
    )
        google-map-container( 
            v-bind='mapOptions'
            :center='center'
        )   
            google-map-advanced-marker(
                v-for='marker in props.mapMarkers'
                v-bind='marker'
            )
</template>
<script setup lang="ts">

import { computed } from "vue";
import type { mapLoaderProps } from "../types/index.ts"
import { center_markers } from "../"

let props = withDefaults( defineProps< mapLoaderProps >(), {
    centerOn: "manual"
} )

let center = computed(() => {
    if( props.centerOn == 'markers') {
        return center_markers( props.mapMarkers )
    }
    return props?.mapOptions?.center
})

</script>