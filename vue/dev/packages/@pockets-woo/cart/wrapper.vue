<template>
<slot 
    :api="api"
    :results="results"
    :isOpen="isOpen"
    :isLoading="isLoading"
    v-bind="{ ...eventHandlers }"
    :ID="cartId"
/>
</template>
<script setup lang="ts">

//@ts-nocheck

import { onMounted, onUnmounted, watch, ref } from "vue"

import { $pockets } from "@pockets-core"
import { api } from "./api"

import type { crudConnection} from "@pockets-core/crud/types"

type $props =  {
    /**
        Query Used for cart 
    */
    query: crudConnection & {
        hash: any
    }
    /**
        Used to trigger opening/closing/showing cart instance 
    */
    cartId?: string
}

let props = withDefaults( defineProps< $props >(), {
    cartId: "global"
} )

let results = defineModel( 'results', { default: false } )
let isOpen = defineModel( 'isOpen', { default: false } )

let isLoading = ref( false )

let eventHandlers = {
    open: () => isOpen.value = true,
    close: () => isOpen.value = false,
    toggle: () => isOpen.value = !isOpen.value,
}

let cartEventWatcher = ( key, command ) => {
    
    let keys = [ 'all', props.cartId ]
    
    if( !keys.includes( key) ) {
        return
    }

    let callback = eventHandlers[command] ?? function(){}
    
    callback()

}

onMounted( () => api.event.on( 'cart-event', cartEventWatcher ) )
onUnmounted( () => api.event.off( 'cart-event', cartEventWatcher ) )

watch( () => api.hash, async() => {
    
    let {
        model,
        init,
        action,
        input,
        output 
    } = props.query

    try {
        isLoading.value = true
        let res = await $pockets.crud( model ).initOnce( init, api.hash )[ action ] ( input, output )
        results.value =  res
    } catch( e ) {
    } finally {
        isLoading.value = false
    }
    
}, { immediate: true } )


defineSlots<{
    /**
        Provides an api for the accordion.
        @binding {object | boolean } results Results of cart query. Will be false the first time until query conclued
        @binding { boolean } isLoading When local cart is loading, this will be true
        @binding {boolean } isOpen Is cart currently open/showing
        @binding { object } api Woos main cart api
        @binding { string } ID refers to the cartId prop passed in.
    */
    default: {}
}>()


</script>