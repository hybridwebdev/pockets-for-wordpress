---
tag: 'pockets-ux-code-block'
route: "pockets vue/components/UX/code-block/example"
component: "@pockets-components/UX/code-block/index.vue"
---
<template>
<pockets-story-demo-container
    :state="initState"
    :html="HTML"
/>
</template>
<script setup lang="ts">

import HTML from "./example.html?raw"
import code from "./code.html?raw"

let initState = () => ({
    props: {
        code,
        class: "p-1 bg-black",
        lang: "js",
        copyEnabled: true
    }
})
</script>