---
route: 'pockets vue/components/ux/Range Slider/Example'
tag: 'pockets-ux-range-slider'
---
<template>
<pockets-story-demo-container
    :state="initState"
    :html="HTML"
>
    <template #controls="{ state }">
        <label class="grid-info-120">
            <span>Min</span>
            <input type='number' v-model="state.props.min" class="form-control">
        </label>
        <label class="grid-info-120">
            <span>Max</span>
            <input type='number' v-model="state.props.max" class="form-control">
        </label>
        <label class="grid-info-120">
            <span>Step</span>
            <input type='number' v-model="state.props.step" class="form-control">
        </label>
        <label class="grid-info-120">
            <span>Debounce</span>
            <input type='number' v-model="state.props.debounceRate" class="form-control">
        </label>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">
import HTML from "./example.html?raw"
let initState = () => ({
    props: {
        modelValue: 0,
        min: 0,
        max: 20,
        step: 1,
        mode: "single",
        debounceRate: 0,
    }
})
</script>