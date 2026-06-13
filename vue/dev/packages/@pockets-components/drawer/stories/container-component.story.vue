---
route: "pockets vue/components/drawer/container"
tag: 'pockets-drawer'
component: '@pockets-components/drawer/components/container/index.vue'
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
