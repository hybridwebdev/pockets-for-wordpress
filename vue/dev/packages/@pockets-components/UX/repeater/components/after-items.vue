<template lang="pug">

render(
    :api='api'
)
    div(
        class='d-flex align-items-center gap-1 pockets-ux-repeater-after-items justify-content-end'
    )
        button( 
            class="btn btn-outline-confirm rounded-0 px-2 py-1"
            v-tooltip='"Add new item to end of list"'
            @click="api.addToEnd( api.items.length, api.newItem )"
            :disabled="!api.canAdd"
        ) Add new Item

        button( 
            class="btn btn-outline-danger rounded-0 px-2 py-1"
            v-tooltip='"Clear all items"'
            @click="api.clear"
            :disabled="api.isEmpty || !api.canRemove"
        ) Clear All
</template>
<script setup>
import { context } from "../context/"
let api = context.inject.api()
let render = context.inject.slot( 'after-items' )
</script>