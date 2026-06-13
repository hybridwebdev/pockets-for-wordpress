---
route: "pockets vue/components/drawer/panel"
tag: 'pockets-drawer-panel'
component: '@pockets-components/drawer/components/panel/index.vue'
---
<template>
    <pockets-story-demo-container
        :state="initState"
        :html="HTML"
    >
        
    </pockets-story-demo-container>
</template>
<script setup lang="ts">
import HTML from "./example.html?raw"
let initState = {
    props: { 
    }     
}

</script>
