---
route: 'pockets vue/components/Google Map/Api Loader/Example' 
tag: 'google-map-api-loader'
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
    }
})
</script>