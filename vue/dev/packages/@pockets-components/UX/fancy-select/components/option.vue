<template>
    <option v-if="show" :value="props.value">
        <slot/>
    </option>
</template>
<script setup lang="ts">
import { computed, useSlots } from "vue"
import { context } from "../"

let slots = useSlots()

type props = {
    value: any
}
let props = withDefaults( defineProps< props > (), {

} )

let api = context.inject.api()

let slot = computed( () => slots?.default()[0] ?? false )

let search = ( str: string, search: string ) => str.toLowerCase().includes( search.toLowerCase() )  

let show = computed( () => {

    if( !api.search ) {
        return true
    }

    if( search( props.value, api.search ) ) {
        return true
    }

    if( slot.value ) {
        return search( slot.value.children, api.search )
    }

} )

</script>