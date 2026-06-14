<template>
    <slot :state='state'/>
</template>
<script lang='ts' setup>

defineOptions( {
    inheritAttrs: false,
} )

import { reactive, useAttrs } from 'vue'

let state = reactive( { ...useAttrs() } )

defineSlots< {
    /**
        Provides state to content in slot.         
        @binding {reactive} state This will be a reactive using all props added to the component. For example you could add a prop of foo='bar' and it would be accessible as state.foo.
    */
    default: {}
} >()
</script>
