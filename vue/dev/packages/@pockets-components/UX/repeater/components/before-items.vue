<template lang="pug">
render( :api='api' )
    div(
        v-if='api.isEmpty'
        class='text-end pockets-ux-repeater-before-items'
    ) No entries. Add an item.
</template>
<script setup>
import { context  } from '../context/'
let api = context.inject.api()
let render = context.inject.slot( 'before-items' )

</script>