<template lang='pug'>

div( class='pockets-class-document grid columns-1 gap-2')
    
    render-options()

    div( class='grid-info-md gap-2 align-items-start' )    

        side-bar()
        
        div(
            class='bg-grey-800 p-2'
            v-if='!api.document'
        )   
            div(
                class='fw-8'
            ) Select a document to get started.

        div( class='information-panel' v-if='api.document')
            method-info( 
                v-if='api.active.tab == "method"' 
            )
            property-info(  
                v-if='api.active.tab == "property"'
            )
            class-info(  
                v-if='api.active.tab == "class"'
            )

</template>
<script lang='ts'>
import { setup, props } from "./setup"

import renderOptions from "./options/index.vue"

import methodInfo from "./method-info/index.vue"
import classInfo from "./class-info/index.vue"
import propertyInfo from "./property-info/index.vue"
import sideBar from "./side-bar/index.vue"

export default {
    props,
    setup,
    components: {
        methodInfo,
        classInfo,
        propertyInfo,
        sideBar,
        renderOptions
    },
}
</script>
<style scoped lang='scss'>
    .pockets-class-document:deep() {
        code {
            color: var(--bs-primary-lt);
            font-weight: 800;
        }
        .class-document-link {
            display: inline-block;
        }
        h1 {
            font-size: 1.5rem;
            color: var(--bs-primary-dk);
            font-weight: 800;
            margin: 0;
        }
        ul {
            margin: 0;
            li {
                list-style: disc;
                &::marker {
                    color: var(--bs-primary-dk);
                    font-size: 20px
                }
            }
        }
        p {
            margin: 0;
            font-size: 1rem;
        }
        option:checked {
            background: var(--bs-accent-lt);
            color: #fff !important;
            font-weight: 800;
        }
        .grid-info-sm {
            grid-template-columns: 140px 1fr;
            display: grid;
        }
        .grid-info-md {
            grid-template-columns: 360px 1fr;
            display: grid;
        }
    }
    
</style>