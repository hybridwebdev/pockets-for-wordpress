---
tag: 'pockets-ux-repeater'
route: "pockets vue/components/ux/repeater/example"
component: "@pockets-components/UX/repeater/loader/loader.vue"
---
<template>
<pockets-story-demo-container
    :state="initState"
    :html="HTML"
>
    <template #controls="{ state }">
        <label class="grid-info-120">
            <span>Layout</span>
            <select v-model="state.props.layout" class="form-control">
                <option value="tabbed">Tabbed</option>
                <option value="stacked">Stacked</option>
            </select>
        </label>
        <label class="grid-info-120">
            <span>Min Items</span>
            <input type='number' v-model="state.props.minItems" class="form-control">
        </label>
        <label class="grid-info-120">
            <span>Max Items</span>
            <input type='number' v-model="state.props.maxItems" class="form-control">
        </label>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">
import HTML from "./example.html?raw"
let initState = () => ({
    props: {
        layout: "tabbed",
        newItem: {
            test: "foo"
        },
        modelValue: [],
        minItems: 0,
        maxItems: 10,
        itemInnerClass: "p-1 bg-grey-800 text-white"
    }
})
</script>