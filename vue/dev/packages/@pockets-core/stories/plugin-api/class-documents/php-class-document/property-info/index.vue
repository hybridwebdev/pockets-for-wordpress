<template lang='pug'>

div( 
    class='grid columns-1 gap-2 text-break'
)

    div( v-if='!property' class='p-2 bg-grey-800 fw-8' ) 
        | This class has no properties 

    div( 
        class='grid gap-2' 
        v-if='property'
    )

        div(
            class='grid-info-sm'
        )
            span( class='text-primary-lt py-1' ) Property
            
            div( class='grid gap-1 bg-grey-800 p-2 columns-1')
                
                span( class='text-primary-lt fw-8 fs-20' ) ${{property.name}}  
                div( 
                    class='d-flex align-items-center text-black fw-8'
                    v-if='property.type || property.properties'
                )
                    span(
                        class='pe-1 text-primary-dk' 
                        v-if='property.type'
                    ) ({{ property.type }}) 
                    span( 
                        class='text-primary-dk'
                        v-if='property.properties'
                    ) {{property.properties}}

        renderComment( :documentSection='property')
        renderAttributes( :documentSection='property')
        renderTags(:documentSection='property')
        
        div(
            class='grid-info-sm'
        )
            span( class='text-primary-lt py-1' )  Value
            pockets-ux-code-block(
                :code='property.value === null ? "Null" : property.value'
            )

</template>
<script setup lang='ts'>

import { computed } from "vue"
import { useApi } from "../use-api"

import renderAttributes from "../attributes/index.vue"
import renderComment from "../comment/index.vue"
import renderTags from "../tags/index.vue"

let api = useApi()

let property = computed( () =>  api.document.properties[api.active.property] ?? false )

</script>