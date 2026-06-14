---
route: 'pockets vue/components/ux/Popper/Component - Example'
tag: 'pockets-popper'
---
<template>
<pockets-story-demo-container
    :state="initState"
>
    <template #default="{ state }">
        <pockets-story-demo
            :html="HTML"
        />
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">
import HTML from "./example.html?raw"
let initState = () => ({
    props: {
    }
})
</script>