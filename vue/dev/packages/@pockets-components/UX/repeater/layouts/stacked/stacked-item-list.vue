<template lang="pug">
div(
    v-for='( item, index ) in api.items' 
    class='pockets-ux-repeater-item'
    :class='api.itemClass'
    :key='item'
) 
    div(
        :class='api.itemInnerClass'
        class='pockets-ux-repeater-item-inner'
    )
        render-item( 
            :item='item' 
            :index='index'
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
<script setup>

import itemControls from "../../components/item-controls.vue"
import { context } from "../../context/"

let api = context.inject.api()

let renderItem = context.inject.slot( 'item' )
let renderItemControls = context.inject.slot( 'item-controls' )

</script>