<template lang='pug'>

div( 
    class='grid columns-1 gap-2 text-break'
)
    
    div( 
        v-if='!method' 
        class='p-2 bg-grey-lt'
    ) 
        span( class='p-2 bg-white fw-8 d-block') This class has no methods

    div( 
        class='gap-2 grid' 
        v-if='method'
    )
        div(
            class='grid-info-sm'
        )
            span( class='fw-8 py-1 text-primary-lt' ) Function

            div( 
                class='fs-20 fw-8 p-2 bg-grey-800 grid gap-1 columns-1' 
            )
                
                div(class='text-white fw-8')
                    | {{ method.name }} 
                    | ( 
                    span( v-if='method.args' class='fs-16 text-primary-lt') {{ method.argNames.join(', ') }} 
                    |  )
                span(  
                    class='fs-16 text-primary-dk'
                    v-if='method.properties'
                ) {{ method.properties }}
        
        renderComment( :documentSection='method')
        renderAttributes( :documentSection="method" )
        
        div(
            class='grid-info-sm'
            v-if='method.args'
        )
            
            span( class='fw-8 text-primary-lt py-1') Arguments

            div( class='grid columns-1 gap-1')
                
                div( 
                    class='grid gap-2 bg-grey-800 p-2 text-white' 
                    
                    v-for="arg in method.args" 
                    :key="arg.name"
                )

                    div(class='grid columns-1 gap-1')
                        span( class='text-primary-lt fw-8 fs-20' ) ${{arg.name}}  

                        div(class='d-flex align-items-center fw-8')
                            span( class='pe-1 text-primary-dk' ) {{arg.optional ? "Optional " : "Required "}}
                            span( class='text-primary-dk' v-if='arg.type' )
                                | ({{arg.type}})

                    renderAttributes(:item="arg")
                    
                    div(
                        class='grid-info-sm align-items-center'
                        v-if='arg.optional'
                    )
                        span( class='fw-8' ) Default 
                        
                        code( class='fw-8 p-2 text-white bg-grey-700')
                            pre( class='m-0' ) {{ arg.default === null ? "Null" : arg.default }}

        div(
            class='grid-info-sm'
            v-if='method.return'
        )
            span( class='fw-8 text-primary-lt' ) Return
            pockets-ux-code-block( 
                :code='method.return'
            )
        renderTags( :documentSection='method')
        
</template>
<script lang='ts' setup>
import { useApi } from "../use-api"

import { computed } from "vue"

import renderAttributes from "../attributes/index.vue"
import renderComment from "../comment/index.vue"
import renderTags from "../tags/index.vue"

let api = useApi()

let method = computed( () =>  api.document.methods[api.active.method] ?? false )
</script>