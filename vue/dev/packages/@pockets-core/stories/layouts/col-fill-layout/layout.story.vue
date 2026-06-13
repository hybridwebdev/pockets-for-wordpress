---
_route: "pockets plugin/layouts/col-fill-layout"
---
<template>
<pockets-story-demo-container>
    <template #default>
        <pockets-story-demo
            :html="HTML"
            #demo
        >
            <pockets-story-iframe
                :html="HTML"
            />
        </pockets-story-demo>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">
import HTML from "./example.html?raw"

</script>