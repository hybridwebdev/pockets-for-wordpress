---
tag: "pockets-fancy-input"
route: "pockets vue/components/ux/fancy-input/example"
component: "@pockets-components/UX/fancy-input/index.vue"
---
<template>
<pockets-story-demo-container
    :state="initState"
>
    <template #default="{ state }">
        <pockets-story-demo
            :html="HTML"
            :state="state"
        >
            <template #demo>
                
                <pre>{{ state.props }}</pre>
                <render-html
                    :innerHTML="HTML"
                    :state="state"
                />
            </template>
        </pockets-story-demo>
    </template>
    <template #controls="{ state }">
        <label class="grid-info-120" role="button">
            Debounce
            <input 
                class="form-control" 
                v-model="state.props.debounce" 
                :min="0" 
                type="number"
            >
        </label>
        <label class="grid-info-120" role="button">
            Min
            <input 
                class="form-control" 
                v-model="state.props.min" 
                type="number"
            >
        </label>
        <label class="grid-info-120" role="button">
            Max
            <input 
                class="form-control" 
                v-model="state.props.max" 
                :min="0" 
                type="number"
            >
        </label>
        <label class="grid-info-120" role="button">
            Name
            <input 
                class="form-control" 
                v-model="state.props.name" 
                :min="0" 
                type="text"
            >
        </label>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">
import HTML from "./example.html?raw"

let initState = () => ( {
    props: {
        modelValue: 1,
        debounce: 500,
        min: 0,
        max: 999,
        name: "input-name"
    }
} )

</script>