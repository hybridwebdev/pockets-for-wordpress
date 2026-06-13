<template>
<component :is="tag">
    <slot v-bind="container" />
</component>
</template>
<script setup lang="ts">
//@ts-nocheck
import { context } from '../context'
import { ref } from 'vue'
import type { accordionOptions } from "../types/index.ts"
import { reactiveComputed } from "@vueuse/core"
import { toggleValue } from "@pockets-core/utils/dot-prop/array"
import emit from "tiny-emitter"

let props = withDefaults( defineProps< accordionOptions >(), {
     
    minOpen: 0,
    mode: "single",
    tag: 'div',
   
    itemOptions: {
        open: "item-open",
        closed: "item-closed",
        class: "accordion-item"
    },
    triggerOptions: {
        open: "trigger-open",
        closed: "trigger-closed",
        class: "accordion-trigger"
    },
    contentOptions: {
        open: "content-open",
        closed: "content-closed",
        class: "accordion-content"
    }

} )

defineSlots<{
    /**
        Provides an api for the accordion.
        @binding {function} closeAll Closes all ID's
        @binding {function} openAll Opens all ID's
        @binding {function( ID: string | number )} trigger Toggles ID
        @binding {array} open List of open ID's
    */
    default: {}
}>()
let event = new emit()

let open = defineModel<[string | number]>( 'open', {
    default: () => []
} )

let container = reactiveComputed( () => ({ 
    
    minOpen: props.minOpen,
    mode: props.mode,
    open,
    
    event,
    openAllHandler: ( ID: any ) => {
        if( container.open.includes( ID) ) {
            return
        }
        container.open.push( ID)
    },
    openAll: () => {
        if( container.mode != 'multiple') {
            return
        }
        container.event.emit('open-all')
    },
    closeAll: () => {
        if( container.mode != 'multiple') {
            return
        }
        container.open = []
    },
    
    createGroupID: () => Date.now(),

    trigger: ( ID: any ) => {
        let map = {
            single: () => {
                if( container.open.includes( ID ) ) {
                    if ( container.minOpen > 0 && container.minOpen - 1 <= container.open.length ) {
                        return;
                    }
                    return container.open = []
                }
                container.open = [ ID ]
            },
            multiple: () => {
                container.open = toggleValue( container.open, ID )
            }
        }
        map[ container.mode ]()
    },
    
} ) )

context.provide.container( container )
context.provide.groupID( container.createGroupID() )

context.provide.config( ref( props ) )

</script>