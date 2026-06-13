---
route: "pockets-nodes/router/example"
component: "@pockets-node-tree/components/tree-router-view/index.vue"
tag: "pockets-node-tree-router-view"
---
<template>
    <pockets-story-demo-container
        :state="initState" 
        :html="HTML"
    >
    </pockets-story-demo-container>
</template>
<script setup>

let initState = {

}

let HTML = `<div>
    This Component has no demo.
</div>`
</script>