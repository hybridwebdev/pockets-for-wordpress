<template lang="pug">

div(
    class='pockets-ux-repeater-item'
    v-for='( item, index ) in api.items' 
    :key='item'
    :class='api.itemClass'
)

    div(class='d-flex bg-accent-dk')

        component(
            :is='api.itemTriggerElement'
            @click="activate( index )"
            :class='[{ active: activeIndex === index}, api.itemTriggerClass]'
        )
            render-item-tab-text(
                :api='api'
                :item='item'
                :index='index'
            ) Item {{ index + 1 }}
            span(class='ms-auto ps-1 tab-icon' v-if='api.itemTriggerElementShowTabIcon')
                i(
                    class='fa fa-chevron-down'
                    :class='{ "fa-chevron-up": activeIndex === index, "fa-chevron-down": activeIndex !== index }'
                )

        render-tab-item-controls(
            :item='item'
            :index='index'
            :api='api'
        )
            item-controls(
                :item='item'
                :index='index'
                style='--button-color: var(--bs-white); background: var( --repeater-item-controls-background, var(--bs-accent-dk))'
            )

    div(
        class='pockets-ux-repeater-item-inner'
        :class='api.itemInnerClass'
        :index='index'
        v-if="index === activeIndex"
    )
    
        render-item( 
            :item='item' 
            :index='activeIndex'
            :api='api'
        )
            div() {{ item }}
        render-item-controls(
            :item='item'
            :index='index'
            :api='api'
        )
            item-controls(
                :item='item'
                :index='index'
            )
</template>
<script setup lang="ts">
import itemControls from "../../components/item-controls.vue"
import { context } from "../../context/"
import { onMounted, onUnmounted, ref } from "vue"
let api = context.inject.api()

let activeIndex = ref<number | boolean>( false )

let renderItem = context.inject.slot( 'item' )
let renderItemControls = context.inject.slot( 'item-controls' )
let renderTabItemControls = context.inject.slot( 'item-tab-controls' )
let renderItemTabText = context.inject.slot('item-tab-text')

let activate = ( index: number) => {
    if(activeIndex.value === index) {
        activeIndex.value = false
        return
    }
    activeIndex.value = index
}
let listeners = {
    remove: ( index: number ) => {
        if( activeIndex.value === false ) {
            return
        }
        if(api.items.length == 0 ) {
            return
        }
        index--
        if( index < 0 ) {
            index = 0
        }
        activeIndex.value = index
    },
    add: ( index: number ) => {
        activeIndex.value = index + 1
    },
    addEnd: ( index: number ) => {
        activeIndex.value = index
    },
    clear: () => {
        activeIndex.value = false
    },
    moved: ( info ) => {
        if( info.oldIndex === info.newIndex ) {
            return
        }
        if( activeIndex.value === false ) {
            return
        }
        activeIndex.value = info.newIndex 
    }   
}

let listenerMap = {
    "remove-item": listeners.remove,
    "add-item": listeners.add,
    "add-item-end": listeners.addEnd,
    "clear-items": listeners.clear,
    "drag-end": listeners.moved
}

onMounted( () => {
    Object.entries( listenerMap ).map( ( { 0: k, 1: v } ) => api.event.on( k, v ) )
} )

onUnmounted(() => {
    Object.entries( listenerMap ).map( ( { 0: k, 1: v } ) => api.event.off( k, v ) )
} )

</script>
<style lang="scss" scoped>
.pockets-ux-repeater-toggle-tab-button {
    i {
        transition: .25s rotate;
    }
    &.active i {
        rotate: -180deg;
    }
}
</style>