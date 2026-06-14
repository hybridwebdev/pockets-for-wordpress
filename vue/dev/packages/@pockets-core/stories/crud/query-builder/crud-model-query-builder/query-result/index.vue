<template lang='pug'>
div( class='grid columns-1 gap-1')
    label(class='fw-8 fs-20 text-primary-lt') Query result
    div(
        class='loading-container'
        :loading='loading'
        style='--overlay: none'
    )
        pockets-ux-code-block(
            :code='code'
            :key='code'
            class='fs-20'
        )

</template>
<script setup>
import { computed } from "vue"
import { context } from "../context"

let query = context.inject.query()

let { loading, result } = query

let code = computed( () => {
    if( loading.value ) return "Running query..."
    if( !result.value ) return "No query has been run."
    return JSON.stringify( result.value, null, 2 ) 
} )

</script>
