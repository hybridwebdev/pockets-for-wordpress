<template>
    <slot v-bind='$pockets.data'/>
</template>
<script lang='ts' setup>

import { $pockets } from "@pockets-core"

defineOptions( {
    inheritAttrs: false,
} )

defineSlots<{
    /**
        Any state on $pockets.data can be accessed inside this slot. 
    */
    default: {}
}>()
</script>
