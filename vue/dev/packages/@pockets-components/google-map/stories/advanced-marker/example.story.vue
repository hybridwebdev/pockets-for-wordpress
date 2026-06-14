---
tag: "google-map-advanced-marker"
route: "pockets vue/components/google-map/advanced-marker/example"
component: "@pockets-components/google-map/base-components/advanced-marker.vue"
---
<template>
<pockets-story-demo-container
    :state="initState"
>
    <template #default="{ state }">
        <api-wrapper>
            <pockets-story-demo
                :html="HTML"
                :state="state"
            />
        </api-wrapper>
    </template>
    <template #controls>
        <api-wrapper mode="controls"/>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">
import HTML from "./example.html?raw"
import apiWrapper from "../shared/api-loader.vue"
let initState = () => ({
    props: {
        loaderOptions: apiWrapper.loaderOptions,
        mapOptions: apiWrapper.mapOptions,
    }
})
</script>