---
route: "pockets plugin/layouts/staggered-layout"
---
<template>
<pockets-story-demo-container
    :state="initState"
    :html="HTML"
/>
</template>
<script setup lang="ts">
import HTML from "./card-layout.html?raw"
import { initState } from "./init-state"
</script>