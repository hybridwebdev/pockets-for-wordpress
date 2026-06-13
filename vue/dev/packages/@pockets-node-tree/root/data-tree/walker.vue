<template lang="pug">
component(
    class='grid columns-1 gap-1 pockets-node-tree-node-facade-node pockets-node-tree-node-facade p-1'
    :class='{...facade.classes, "has-children": hasChildren }'
    @click.stop='clickHandler'
    v-hover-intent.capture="hoverIntent"
    :is='render.el'
    v-bind='render.props'
    :key='treeNode.__getTarget'
    :node-depth-is-even='nodeDepthIsEven'
    role='button'
)
    div(
        v-tooltip='{ content: `Depth: ${nodeDepth}`, placement: "top-start", delay: 0 }'
        :class='{ "pb-0": hasChildren }'
        ref='facadeRef'
    ) {{  nodeApi.schema.title }}
    component(
        v-for='node in treeNode.nodes'
        is='tree-walker'
        :tree-node='node'
        :key='node.__getTarget'
    ) 
</template>
<script lang="ts">
// @ts-nocheck
import { computed, ref, onMounted, nextTick } from "vue"
import { pausableWatch } from '@vueuse/core'

import { editor } from "@pockets-node-tree"
import walker from "@pockets-node-tree/walker/index.vue"
import treeLoader from "./index.vue"

export default {
    name: "tree-walker",
    extends: walker,
    setup: ( props ) => {
        
        let facadeRef = ref()
        let $data = walker.setup( props )

        let { treeNode } = props
        let { nodeApi, facade, isTreeLoader } = $data

        let hasChildren = computed( _ => {
            if( nodeApi.hasNodes ) return true
            if( isTreeLoader.value ) return true
        })

        let render = computed( () => {

            if( isTreeLoader.value ) {
                let { source, tag } = treeNode.props
                return {
                    el: treeLoader,
                    props: {
                        source,
                        tag
                    }
                }
            }

            return {
                el: "div"
            }

        } )

        
        let nodeDepth = computed( () => {
            return nodeApi.paths.path.split('.').length / 2 
        } )

        let nodeDepthIsEven = computed( () => {
            return nodeDepth.value % 2 === 0 
        } )
        
        let focus = () => {
            //console.log(facade.active, facadeRef.value)
            if( facade.active && facadeRef.value ) {
                facadeRef.value.scrollIntoView()
            }
        }

        let { 
            pause:pauseFacadeWatcher, 
            resume:resumeFacadeWatcher 
        } = pausableWatch( () => facade.active, focus )

        let clickHandler = () => {

            //pauseFacadeWatcher()
            
            facade.clickHandler()
            editor.active.scrollIntoView()

            nextTick( resumeFacadeWatcher )
        }

        onMounted( () => nextTick( focus ) )
         
        return {
            ...$data,
            render,
            hasChildren,
            clickHandler,
            nodeDepthIsEven,
            nodeDepth,
            facadeRef
        }

    }
    
}

</script>
<style lang='scss' scoped>

$base: ".pockets-node-tree-node-facade";

#{$base} {
    color: #Fff;
    border: 2px solid transparent;
    outline: none;
    &:not(.has-children) {
        // border: 2px solid var(--bs-grey-md);
    }
    &[node-depth-is-even='true'] {
        background: var(--bs-grey-700);
    }
    &[node-depth-is-even='false'] {
        background: var(--bs-grey-800);
    }
}

#{$base}-hovered,
#{$base}-selected,
#{$base}-active {
    &#{$base}-node {
        background: var(--pockets-node-tree-node-api-color) !important;
        &#{$base}-selected {
            filter: none
        }
    } 

}

</style>