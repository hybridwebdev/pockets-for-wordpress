---
tag: 'pockets-ux-copy'
route: "pockets vue/components/UX/copy/example"
component: "@pockets-components/UX/copy/index.vue"
---
<template>
<pockets-story-demo-container
    :state="initState"
    :html="HTML"
/>
</template>
<script setup lang="ts">

import HTML from "./example.html?raw"

let initState = {
    props: {
        source: "test 123"
    }
}
</script>