---
route: "pockets plugin/crud/Query Builder"
storyIcon: "fa fa-wrench"
priority: -1000
---
<template>
    
    <div class="p-2">
        <pockets-crud-connection
            #default="connection"
            v-bind='query'
            :cachingEnabled="true"
        >
            <div 
                class="grid columns-1 gap-2 loading-container fw-8" 
                :loading="connection.loading"
                style="overflow: hidden; min-height: 100px"
            >
                <span 
                    v-if="connection.failed"
                    class="alert alert-danger m-0"
                >
                    {{ connection.failed }}
                </span>
                <query-builder
                    v-bind="connection.results"
                    v-if="connection.results"
                />
                </div>
        </pockets-crud-connection>
    </div>
        
</template>
<script setup>
import queryBuilder from "./crud-model-query-builder/index.vue"

let query = {
    model: "crud-models",
    action: 'read',
    input: {
        "schemas": null
    },
    init: null
}
</script>