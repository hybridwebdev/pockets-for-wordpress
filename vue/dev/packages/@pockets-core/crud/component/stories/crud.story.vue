---
tag: "pockets-crud-connection"
route: "pockets plugin/crud/component/example"
component: "@pockets-core/crud/component/index.vue"
---
<template>
    <pockets-story-demo-container
        :state="initState" 
        :html="HTML"
    />   
</template>

<script setup>

import HTML from "./example.html?raw"

let initState = {
    props: {
        clearOnLoad: true,
        autoLoad: false,
        action: "read",
        model: "posts",
        init : {
            post_type: ["any"]
        },
        input : {
            "items:<="  : [
                "title", 
            ]
        }
    }
} 

</script>