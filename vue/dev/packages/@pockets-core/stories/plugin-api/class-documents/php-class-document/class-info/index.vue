<template lang='pug'>

div( 
    class='grid gap-2 fw-6 columns-1' 
)
    div(
        class='grid-info-sm align-items-center'
    )    
        span( 
            class='py-1 fw-8 text-primary-lt' 
        ) Class Name
        
        code( class='p-2 bg-grey-800 fw-8 fs-20 text-white' )
            | {{api.document.info.name}}
            span( 
                v-if='api.document.info.properties' 
                class='text-primary-md ps-2' 
            ) {{api.document.info.properties}}

    renderComment( :documentSection='api.document.info')
    renderAttributes( :documentSection='api.document.info')
    renderTags(:documentSection='api.document.info')

</template>
<script setup lang='ts'>
    
    import { useApi } from "../use-api"
    
    import renderAttributes from "../attributes/index.vue"
    import renderTags from "../tags/index.vue"

    import renderComment from "../comment/index.vue"

    let api = useApi()
    
</script>