<template lang="pug">
component(
    :is='tag'
    @click.capture='clickHandler'
)   
    slot( v-if='renderSlot' )
    recursion-guard(
        :template-key='templateKey'
    )
        template-loader(
            :source='source'
            :template-key='templateKey'
        )   
            template( #loading)
                div(
                    class='loading-container p-1'
                    loading='true'
                ) Loading content. Please wait
            template( #default = '{ root }')
                tree-walker(
                    v-if='root'
                    :tree-node='root'
                )
</template>
<script lang="ts">

/**
    
    This component serves as the entry point for a tree root. 
    It does the following:

        -   Performs recursion guard to prevent infinite loops if roots 
            are accidentally nested.
        -   Asyncronously attempts to fetch tree root data from
            editor.templates.
        -   If template data is successfully loaded, it's passed down to tree root 
            which handles setting up and rendering the tree.
            
*/
import { computed, provide, inject } from "vue"

import { editor } from "@pockets-node-tree"

import recursionGuard from "./recursion-guard.vue"
import templateLoader from "./template-loader.vue"
import treeWalker from "@pockets-node-tree/walker/index.vue"

let setup = props => {

    let parentTree = inject('pockets-node-tree-parent-tree', false)

    provide('pockets-node-tree-parent-tree', true)

    let templateKey = computed( () => JSON.stringify( props.source ) )

    let clickHandler = () => {
        if( parentTree ) {
            return
        }
        editor.activeTree = {
            ...props,
            templateKey
        }
    }

    return {
        templateKey,
        clickHandler,
        renderSlot: false
    }

}

export default {
    setup,
    components: {
        recursionGuard,
        templateLoader,
        treeWalker
    },
    props: {
        tag: {
            type: String
        },
        source: {
        },
    }
}

</script>