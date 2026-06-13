---
tag: "pockets-slider"
route: "pockets vue/components/slider/html-example"
component: "@pockets-components/slider/components/container.vue"
---
<template>
<pockets-story-demo-container
    :state="initState" 
    :html="HTML"
>
    <template #controls="{ state }">
        <pockets-slider-option-panel :options="state.props"/>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">
import { initState  } from "./init-state";
import HTML from "./example-slider-html.html?raw"
</script>
<style lang="scss" src="./style.scss"/> 