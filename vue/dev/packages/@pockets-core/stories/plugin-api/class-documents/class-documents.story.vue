---
route: "pockets plugin/class documentation/api"
storyIcon: "fa fa-wrench"
title: "Interface"
---
<template>
    <pockets-story-demo-container>
    
        <pockets-crud-connection
            #default="connection"
            v-bind='query'
            :cachingEnabled="true"
        >
            <div 
                class="grid columns-1 gap-2 loading-container fw-8" 
                :loading="connection.loading"
                style="min-height: 100px"
            >
                <span 
                    v-if="connection.failed"
                    class="alert alert-danger m-0"
                >
                    {{ connection.failed }}
                </span>
                <php-class-document 
                    v-bind="connection.results"
                    v-if="connection.results"
                />
                </div>
        </pockets-crud-connection>
        
    </pockets-story-demo-container>
</template>
<script setup>
import phpClassDocument from "./php-class-document/index.vue"

let query = {
    "model": "wp",
    "action": "read",
    "init": null,
    "input": {
        "class_documentation:documents": null
    }
}
</script>