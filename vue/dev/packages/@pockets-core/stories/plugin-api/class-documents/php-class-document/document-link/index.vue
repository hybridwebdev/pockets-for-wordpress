<template lang='pug'>
div( 
    class='fw-4 d-flex align-items-center'
)
    span( class='text-decoration-none me-1' ) 
        slot(name='content' ) This item refers to another class. See information for: 
    button(
        :class="buttonClass"
        @click="api.documentLink(tag)"
    ) 
        slot(name='button') {{name}}
</template>
<script setup lang='ts'>
import { computed } from "vue"
import { useApi } from "../use-api"

let api = useApi()

let props = defineProps({
    tag: {
        type: String
    },
    buttonClass: {
        type: String,
        default: "btn btn-link fw-8 p-0 border-0"
    }
})

let name = computed( () => props.tag.split("|").map( e => e.trim() ).join(" | ") )

 
</script>