<template lang="pug">
component( 
    ref="nodeRef"
    class='pockets-node-tree-node-facade-node'
    :class='facade.classes'
    @click.stop='facade.clickHandler'
    v-hover-intent.capture="hoverIntent"
    :is='treeNode.el'
    v-bind='treeNode.props'
    :node-schema="treeNode.schema"
    v-tooltip="tooltip"
)   
    component( 
        v-for='node in treeNode.nodes'
        is='tree-walker'
        :tree-node='node'
        :key='node?.__targetPosition'
    )
</template>
<script lang='ts'>
import { setup } from "./setup"
let props = {
    treeNode: {
        /**
            This is an object so that the observableSlim proxy isn't lost
        */
        el: String,
        data: Object,
        nodes: {
            type: Array,
        },
        props: Object,
        schema: String,
    },
}
export default {
    name: "tree-walker",
    setup,
    props,
}
</script>
<style lang='scss'>

$base: ".pockets-node-tree-node-facade";

[node-schema],
[node-schema="node-container"],
[node-schema="tree-root-loader"] {
    &:empty {
        &::before {
            font-size: 16px;
            content: "I am an empty element. Put content in me.";
        }
    }
}

#{$base}-hovered {
    --pockets-node-tree-node-api-color: var(--bs-accent-dk);
}

#{$base}-selected {
    --pockets-node-tree-node-api-color: var(--bs-accent-lt);
    /**
        Needs to be here to block selecting nodes inside selected nodes.
    */
    pointer-events: none !important;
}

#{$base}-active {
    --pockets-node-tree-node-api-color: var(--bs-green);
}

#{$base}-show-all {
    --pockets-node-tree-node-api-color: var(--bs-primary-md);
}

#{$base}-tooltip {
    transition: initial !important;
    z-index: 1;
    text-transform: capitalize;
    .v-popper__inner {
        padding:10px !important;
    }
}

#{$base}-hovered,
#{$base}-show-all,
#{$base}-selected,
#{$base}-active {
    
    &#{$base}-node {
        outline: 5px solid var(--pockets-node-tree-node-api-color);
        iframe {
            pointer-events: none !important;
        }
        &#{$base}-selected {
            filter: brightness(25%) contrast(100%);
        }
    } 

    &#{$base}-tooltip {
        outline: 5px solid var(--pockets-node-tree-node-api-color);
        z-index: 1 !important;
        .v-popper__inner {
            background: var(--pockets-node-tree-node-api-color);
            border-radius: 0px !important;
            padding: 0px !important;
        }
        .v-popper__arrow-container {
            display: none;
        }
    }

}

</style>