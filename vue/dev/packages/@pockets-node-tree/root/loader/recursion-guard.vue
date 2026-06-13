<template lang="pug">
p(  
    v-if='isRecursive'
    class='alert alert-danger m-0 fw-8'
) Infinite loop detected. Tree roots with the same source cannot be nested.
slot( v-if='!isRecursive' )
</template>
<script setup>

import { provide, inject, computed } from "vue"

let props = defineProps( {
    templateKey: {}
} )

let $injectionKey  = 'pockets-node-tree/roots'

let path = inject( $injectionKey , [] )

provide( $injectionKey, path.concat( props.templateKey ) )

let isRecursive = computed( () => path.includes( props.templateKey ) )

</script>