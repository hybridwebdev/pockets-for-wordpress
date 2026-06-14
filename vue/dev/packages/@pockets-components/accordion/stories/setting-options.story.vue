---
tag: 'pockets-accordion'
route: "pockets vue/components/accordion/Settings"
component: "@pockets-components/accordion/components/container.vue"
---
<template>
<pockets-story-demo-container
    :state="initState()"
    :html="HTML"
>
    <template #controls="{ state }">
        <controls :state="state" />        
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">
import controls from "./controls.vue"
import { initState } from "./init-state"
import HTML from "./setting-options.html?raw"

</script>
