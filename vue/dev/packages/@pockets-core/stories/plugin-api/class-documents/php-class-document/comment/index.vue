<template lang='pug'>
div(
    class='grid-info-sm'
    v-if='documentSection.comment.formatted' 
)    
    
    span( 
        class='py-1 fw-8 text-primary-lt' 
    ) Description
 
    pockets-ux-code-block(
        :key='documentSection.comment.formatted'
        :code='documentSection.comment.formatted'
        lang='ts'
        :copy-enabled="false"
    )

</template>
<script lang='ts' setup>

defineProps({
    documentSection: {
        type: [Object, Boolean],
    }
})

</script>