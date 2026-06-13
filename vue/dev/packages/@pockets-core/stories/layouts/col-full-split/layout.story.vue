---
_route: "pockets plugin/layouts/col-full-split"
---
<template>
<pockets-story-demo-container
    :state="initState"
>
    <template #default>
        <pockets-story-demo
            :html='HTML'
        >
        </pockets-story-demo>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">
import HTML from "./example.html?raw"
import { initState } from "./init-state"

</script>