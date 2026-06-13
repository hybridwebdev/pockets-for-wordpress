<template>
    <div
        class='loading-container loading-container-fixed'
        :loading='api.busy'
        @mouseenter.capture="hoverHandler.enter"
        @mouseleave.capture="hoverHandler.leave"
       
    >
        <render-html
            :innerHTML='api.innerHTML'
            v-if='api.innerHTML'
        />
        <slot v-if='!api.innerHTML' />
    </div>
</template>
<script setup lang='ts'>

import { useRoute, useRouter } from "vue-router"
import { watch, onMounted } from "vue"
import { useApi } from "./use-api"
import { useHandlers } from "./use-handlers"
import { useSetup } from "./use-setup"

import type { routerInstanceProps } from "./types/index.ts"

let props = withDefaults( defineProps< routerInstanceProps >(), {
    autoCacheCurrentRoute: true,
    read: () => ({
        document_title: "",
        document_tree: ""
    })
} )

let route = useRoute()
let router = useRouter()

let api = useApi({
    read: props.read
})

watch( () => route.fullPath, async () => {
    
    if ( ( route?.meta['refresh-page'] ?? false ) === true ) {
        window.location.href = route.fullPath
        return
    }

    window.scrollTo( { 
        top: 0,
        behavior: 'smooth'
    } ) 

    let url = router.$api.urlToObject( route.fullPath ).toString()
    
    await api.sync( url )

} )
 
let hoverHandler = useHandlers( api, router ).hoverHandler( 50 )

useSetup( api, router )

onMounted( () => {

    if( !props.autoCacheCurrentRoute ) {
        return;
    }
    
    let { url } = router.$api.useLink( route.fullPath ) 

    api.fetch( url.toString() ).catch( e => {} )

} )

defineSlots<{
    /**
        Before this component mounts, it will render the slot contents. Once mounted, this will be replaced
        by the result of the route query.
        
    */
    default: {}
}>()

</script>