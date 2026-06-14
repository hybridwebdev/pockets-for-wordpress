---
tag: "pockets-temp-state"
route: 'pockets vue/components/ux/state-containers/temporary/example'
---
<template>
<pockets-story-demo-container 
    :state="initState"
    :html="HTML"
/>
</template>
<script setup>
import HTML from "./example.html?raw"
let initState = () => ({
    props: {
        state: {
            test: "hello world"
        }
    }
})
</script>