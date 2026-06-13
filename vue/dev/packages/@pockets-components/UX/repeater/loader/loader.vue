<template>
<component 
    :is='repeaterLayout' 
    v-bind="props"
/>
</template>
<script setup lang="ts">
/**
    This serves as the front-end for the repeater.
    You can pass a layout argument to choose what 
    layout you want to use for the repeater. 

    You also pass in all props in apiProps which are
    inherited by the repeater model.

    Any slots you pass in will be automatically forwarded to any
    components that wish to consume them. 

    For example you could pass <template #item></template> and any components
    can use that slot via context.inject.slot('item'). 
*/
import stacked from "../layouts/stacked/index.vue"
import tabbed from "../layouts/tabbed/index.vue"
import { useSlots, computed } from "vue"
import { context } from "../context/"
import type { loaderProps } from "../types/"
 
let props = withDefaults( defineProps< loaderProps >(), {
    layout: "tabbed",
    maxItems: -1,
    minItems: -1,
    sortableOptions: {
        handle: '.pockets-ux-repeater-item-handle',
        ghostClass: 'pockets-ux-repeater-item-dragging',
        draggable: ".pockets-ux-repeater-item"
    },
    
    itemTriggerElementShowTabIcon: true,
    itemTriggerElement: "button",

} )

let layouts = {
    stacked,
    tabbed
}

let repeaterLayout = computed( () => layouts[props.layout] ?? layouts['tabbed'] )

let items = defineModel()

let emit = defineEmits( ['repeater:event'] )

context.provide.loader( { items, emit } )

context.provide.slots( useSlots() )

defineSlots<{
    
    /**
        Overrides content shown after repeater items.
        @binding {object} api Instance of repeater API.
    */
    afterItems: {}
    
    /**
        Overrides content shown before repeater items.
        @binding {object} api Instance of repeater API.
    */
    beforeItems: {}
    
    /**
        Used to render entries in repeater.
        @binding {object} api Instance of repeater API.
        @binding {number} index Index of entry in repeater.
        @binding {object} item Data of entry.
    */
    item: {}
    
    /**
        Overrides content Shown in each items controls section. Shown after item slot content.
        @binding {object} api Instance of repeater API.
        @binding {number} index Index of entry in repeater.
        @binding {object} item Data of entry.
    */
    itemControls: {}

    /**
        Overrides content Shown in each items tab section. 
        @binding {object} api Instance of repeater API.
        @binding {number} index Index of entry in repeater.
        @binding {object} item Data of entry.
    */
    itemTabText: {}
    
}>()

</script>
<style lang="scss" scoped>
.pockets-ux-repeater {
    :deep() {
        .pockets-ux-repeater-item-dragging {
            box-shadow: 0px 10px 0px 0px var( --repeater-drag-shadow, var(--bs-accent-lt)), 0px -10px 0px 0px var(--repeater-drag-shadow, --bs-accent-lt);
            * {
                opacity: .5;
            }
        }
    }
}
</style>