<template>
    <pockets-router 
        :routes="routes" 
        history="hash"
        router-ID="pockets-documentation"
        :sync="false" 
    >
        <pockets-router-view/>
    </pockets-router>
</template>
<script setup lang="ts">

import { useRoutes, context } from "@pockets-documentation"

let routes = useRoutes()

context.provide.routes( routes )

/*
    Configuration object that is used throughout the documentation system
*/
interface $props {
    assets: {
        /**
            Used to display logo in places like sidebar
        */
        logo: string
        /**
            Path to use for loading css file for things like story iframe demo 
        */
        css: string
    }
}

let props = withDefaults( defineProps<$props>(), {
     
})

context.provide.documentationConfig( props )

</script>