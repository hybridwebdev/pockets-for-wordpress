---
route: "/wp-admin:path(.*)"
title: "WP Admin"
link: "/wp-admin/"
priority: 999
---
<template>
    <pockets-route-state #default="{route}">
        <pockets-crud-connection
            #default="connection"
            v-bind='{
                "init": null, 
                "model": "wp",
                "action": "read",
                "input": {
                    "load_template": {
                        template: "wp-admin-dashboard/router",
                        query: route.query,
                        params: route.params
                    }
                },
            }'
            :key="route.fullPath"
        >
            <div 
                class="grid columns-1 gap-2 loading-container loading-container-fixed" 
                :loading="connection.loading"
                style="height: 100%"
            >
                
                <span 
                    v-if="connection.failed"
                    class="alert alert-danger m-0"
                >
                    {{ connection.failed }}
                </span>
                <render-html  
                    v-if="connection.results"
                    class="grid columns-1 gap-2"
                    :innerHTML="connection.results.load_template"
                >
                </render-html>
            </div>
        </pockets-crud-connection>
    </pockets-route-state>
</template>
<script setup>
// import { useRoute } from "vue-router"
// let route = useRoute()

</script>
<style lang="scss" src="./style.scss"></style>