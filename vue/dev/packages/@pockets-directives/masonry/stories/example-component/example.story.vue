---
route: "pockets vue/directives/masonry/example"
directive: "@pockets-directives/masonry"
directiveName: "v-pockets-masonry"
---
<template>
<pockets-story-demo-container
    :state="initialState"
>
    <template #default="{ state }">
        <pockets-story-demo
            :html="HTML"
            :state="state"
            render-demo='v-if'
        >
        </pockets-story-demo>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">

import HTML from "./component-example.html?raw";

let initialState = () => ({
    props: {
        items: Array.from( { length: 20 }, ( _, i ) => {
        
            const height = Math.floor(Math.random() * (45 - 8 + 1) + 8) * 10;
        
            return {
                id: i,
                height,
                color: Math.floor(Math.random() * 361),
                imageSrc: `https://placeholdit.com/100x${height}`
            }

        } ),
        masonryOptions: {
            percentPosition: true,
        }
    }
})
</script>