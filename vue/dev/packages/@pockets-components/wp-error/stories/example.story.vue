---
route: "pockets vue/components/wp-error/example"
component: "@pockets-components/wp-error/index.vue"
tag: "pockets-wp-error"
---
<template>

    <pockets-story-demo-container
        :state="initState"
        #default="{ state }"
    >

        <pockets-story-demo 
            :state="state"
            :html="HTML"
        /> 

    </pockets-story-demo-container>
    
</template>
<script setup>
import HTML from "./example.html?raw"

let initState = {
    props: {

        errors: {
            message: [ 'I am an error message!', "Here's another error!" ]
        }
        
    }
}
</script>