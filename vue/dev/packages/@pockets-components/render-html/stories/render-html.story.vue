---
route: "pockets vue/components/render html/Example"
tag: 'render-html'
component: '@pockets-components/render-html/index.vue'
---
<template>
    <pockets-story-demo-container
        :state="initState"
        :html="HTML"
    >
        <template #controls="{ state }">
            <label class="grid-info-120">
                <span>Test</span>
                <input 
                    v-model="state.props.state.test"
                    class="form-control"
                >
            </label>
        </template>
    </pockets-story-demo-container>
</template>
<script setup lang="ts">
import HTML from "./example.html?raw"
let initState = {
    props: {
        innerHTML: "<div> {{ test }} </div>",
        state: {
            test: "hello world"
        }
    }    
}

</script>