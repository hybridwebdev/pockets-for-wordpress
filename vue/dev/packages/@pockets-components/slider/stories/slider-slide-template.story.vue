---
tag: "pockets-slider"
route: "pockets vue/components/slider/slide-template"
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

import HTML from "./example-slide-template.html?raw"

import { initState  } from "./init-state";
</script>
<style lang="scss" src="./style.scss"/>