---
route: "pockets vue/directives/scroll-into-view/example"
directive: "@pockets-directives/scroll-into-view"
directiveName: "v-scroll-into-view"
---
<template>
<pockets-story-demo-container
    :state="initialState"
>
    <template #default="{ state }">
        <pockets-story-demo
            :html="HTML"
            :state="state"
            renderDemo='v-if'
        >
        </pockets-story-demo>
    </template>
    <template #controls='{state}'>
        <label class='grid-info-cq-xs-80 gap-1 grid'>
            <span>Block</span>
            <select v-model='state.props.options.block' class='form-select'>
                <option v-for='option in ["start", "center", "end"]'>
                    {{option}}
                </option>
            </select>
        </label>
        <label class='grid-info-cq-xs-80 gap-1 grid'>
            <span>Behavior</span>
            <select v-model='state.props.options.behavior' class='form-select'>
                <option v-for='option in [ "auto", "smooth" ]'>
                    {{option}}
                </option>
            </select>
        </label>
        <label class='grid-info-cq-xs-80 gap-1 grid'>
            <span>Active</span>
            <select v-model='state.props.active' class='form-select'>
                <option v-for='(option, i) in list' :value=i>
                    {{option}}
                </option>
            </select>
        </label>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">

import HTML from "./component-example.html?raw";

let list = Array.from({ length: 20 }, (_, i) => `Item ${i}`)

let initialState = {
    props: {
        options: {
            parent: ".scroll-container",
            block: "start",
            behavior: "smooth",
        },
        active: 8,
        list        
    }
}
</script>