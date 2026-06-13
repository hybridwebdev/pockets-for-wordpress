---
route: "pockets vue/components/render-markdown/example"
tag: "pockets-render-markdown"
component: "@pockets-components/render-markdown/index.vue"
---
<template>
    <pockets-story-demo-container
        :state="initState"
        :html="HTML"
        local-storage='render-markdown-demo'
    />
</template>
<script setup>
import HTML from "./example-markdown.html?raw"
let initState = { 
    props: {
        content: [`# a title`, '# another title', '- List', '- Item'].join('\n')
    }
}
</script>