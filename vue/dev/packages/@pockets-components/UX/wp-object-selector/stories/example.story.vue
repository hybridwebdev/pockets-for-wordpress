---
tag: 'wp-object-selector'
route: 'pockets vue/components/ux/WP Object Selector/Example'
component: "@pockets-components/UX/wp-object-selector/index.vue"
---
<template>
<pockets-story-demo-container
    :state="initState"
    :html="HTML"
>
    <template #default="{ state }">
        <pockets-story-demo
            :html="HTML"
            :state="state"
        >
            <template #demo>
                <render-html
                    :innerHTML="HTML"
                    :state="state"
                />
            </template>
        </pockets-story-demo>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">
import HTML from "./example.html?raw"

let initState = () => ( {
    props: {
        placeholder: "https://placehold.co/600x400",
        selected: false
    }
} )

</script>