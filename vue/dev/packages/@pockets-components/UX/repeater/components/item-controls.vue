<template lang="pug">
div(
    class='d-flex align-iatems-center pockets-ux-repeater-item-controls'
    :class='api.itemControlsClass'
)

    button( 
        class="btn fa fa-plus"
        v-tooltip='"Add new item after this one"'
        @click="api.add( index, api.newItem )"
        :disabled="!api.canAdd"
    )
    
    button( 
        class="btn fa fa-copy"
        v-tooltip='"Copy this item"'
        @click="api.add( index, item )"
        :disabled="!api.canAdd"
    )

    button( 
        class="btn fa fa-eraser"
        v-tooltip='"Remove Item"'
        @click="api.remove( index )"
        :disabled="!api.canRemove"
    )
    button( 
        class="pockets-ux-repeater-item-handle btn fa fa-grip ms-auto"
        :disabled="!api.canSort" 
    )
</template>
<script setup>
import { context } from '../context/'

let props = defineProps( {
    item: {},
    index: {}
} )

let api = context.inject.api()

</script>
<style scoped lang="scss">
.pockets-ux-repeater-item-controls {
    --button-color: var(--bs-accent-dk);
    --button-hover-color: var(--bs-primary-dk);
    button {
        color: var(--button-color);
        border: 0px;
        font-weight: 900;
        font-size: 18px;
        &:hover {
            color: var(--button-hover-color);
        }
    }
}
</style>