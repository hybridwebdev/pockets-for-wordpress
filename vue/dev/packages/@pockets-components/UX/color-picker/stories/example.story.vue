---
tag: "pockets-ux-color-picker"
route: "pockets vue/components/ux/color-picker/example"
component: "@pockets-components/UX/color-picker/index.vue"
---
<template>
<pockets-story-demo-container
    :state="initState"
    :html="HTML"
/>
</template>
<script setup lang="ts">
import HTML from "./example.html?raw"
let initState = () => ({
    props: {
        modelValue: "#7b22f1",
        tooltip: "Select a color",
        format: "hex",
        position: "bottom right"
    }
})
</script>