<template lang='pug'>
div( class='grid-info-sm')
    span( class='fw-8 py-1 text-primary-lt') Schema
    pockets-ux-code-block( :code='attribute' )
</template>
<script setup lang='ts'>
let props = defineProps({
    attribute: {
    },
    item: {}
})
</script>