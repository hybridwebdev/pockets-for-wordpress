---
tag: "pockets-global-state"
route: "pockets vue/components/ux/state-containers/global/example"
component: "@pockets-components/UX/state-containers/components/subscribe-data.vue"
---
<template>
<pockets-story-demo-container 
>   
    <template #default>
        <pockets-story-demo 
            :html="HTML"
        >
            <template #props>
                <p>
                    Global State
                </p>
                <pockets-ux-code-block :code="$pockets.data.globalState"/>
            </template>
        </pockets-story-demo>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">
import { $pockets } from "@pockets-core"
import { onBeforeMount, onUnmounted } from "vue"
import HTML from "./example.html?raw"

onBeforeMount(() => {
    $pockets.data.globalStateDemo = {
        foo: "bar"
    }
})

onUnmounted(() => {
    delete $pockets.data.globalStateDemo
})
</script>
