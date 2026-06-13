// @ts-nocheck
import { computed, reactive, watch, onMounted, onUnmounted, ref  } from "vue"
import { useVModel } from '@vueuse/core'
import $events from 'tiny-emitter'
import type { Api } from "../../types/"
import { context } from "../../context/"

import { useSortable } from '@vueuse/integrations/useSortable'

export let useApi = ( props ) : Api => {
    
    let sortableContainerRef = ref< HTMLElement >()

    let { items, emit } = context.inject.loader()

    let canRemove = computed( () => {
        if( props.minItems < 0 ) {
            return true
        }
        return items.value.length > props.minItems 
    } )

    let canAdd = computed( () => {
        if( props.maxItems < 0 ) {
            return false
        }
        return props.maxItems > items.value.length
    } )

    let isEmpty = computed( () => items.value.length == 0 )

    let remove = ( index: number ) => {
        items.value.splice( index, 1 )
        api.event.emit("repeater:event", 'remove-item', index )
    }

    let add = ( index: number, entry: unknown ) => { 

        if( typeof entry == 'function' ) {
            entry = entry()
        }

        items.value.splice( index + 1, 0, JSON.parse( JSON.stringify( entry ) ) ) 

        api.event.emit("repeater:event", 'add-item', index )
        
    }

    let addToEnd = ( index: number, entry: unknown ) => { 
        
        if( typeof entry == 'function' ) {
            entry = entry()
        }

        items.value.splice( index + 1, 0, JSON.parse( JSON.stringify( entry ) ) ) 
        api.event.emit( "repeater:event", 'add-item-end', index )
    }

    let canSort = computed( () => api.items.length > 1 )

    let clear = () => {
 
        if( props.minItems >= 0 ) {
            items.value.splice( props.minItems )
        }

        api.event.emit( "repeater:event", 'clear-items' )
        
    }

    let api = reactive( {
       
        ...props,
        items,

        dragging: false,
        event: new $events,
        
        isEmpty,
        canAdd,
        canRemove,

        addToEnd,
        remove,
        add,
        clear,
        canSort,

    } )
    
    let { option }  = useSortable( sortableContainerRef, items, {
        ...props.sortableOptions,
    
        onEnd: ( info ) => {
            api.dragging = false
            api.event.emit( "repeater:event", 'drag-end', info )
        },

        onStart: (info) => {
            api.dragging = true
            api.event.emit( "repeater:event", 'drag-start', info )
        },
        onUpdate: e => {

            const { oldIndex, newIndex } = e

            if (oldIndex === newIndex) return

            const item = api.items[oldIndex]

            const newList = [...api.items]

            newList.splice(oldIndex, 1)
            
            newList.splice(newIndex, 0, item)
        
            items.value.splice( 0, items.value.length, ...newList )

        }
    } )

    watch( () => api.canSort, () =>  option( 'disabled', !api.canSort ), { immediate: true } )
    
    let eventTransmitter = ( ...args ) => emit( 'repeater:event', ...args ) 
    
    onMounted( () => api.event.on('repeater:event', eventTransmitter ) )

    onUnmounted( () => api.event.off('repeater:event', eventTransmitter ) )
    
    context.provide.api( api ) 

    return { api, sortableContainerRef }

}
