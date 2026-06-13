---
tag: "pockets-woo-cart"
route: "pockets-woo/cart/component-example"
component: "@pockets-woo/cart/wrapper.vue"
---
<template>
    <pockets-story-demo-container 
        :state="initState" 
        :html="HTML"
    />   
</template>

<script setup>

import HTML from "./example.html?raw"

let meta = {
    tag: "pockets-woo-cart",
}

let initState = () => ( {
    props: {
        query: {
            model: "woo/cart",
            action: "read",
            init: {},
            input: {
                total: ""
            }
        }
    }
} )

</script>