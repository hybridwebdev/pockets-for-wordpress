---
route: 'pockets vue/components/ux/state-containers/local/example'
tag: "pockets-local-state"
component: "@pockets-components/UX/state-containers/components/provide-state.vue"
---
<template>
<pockets-story-demo-container
    :state="initState"
>
    <template #default="{ state }">
        <pockets-story-demo
            :html="HTML"
            :state="state"
        >
            <template #props>
                <p>
                    Local State changes do not emit up. 
                    In this instance the passed down state remains unchanged.
                </p>
                <pockets-ux-code-block :code="state.props"/>
            </template>
        </pockets-story-demo>
    </template>
</pockets-story-demo-container>
</template>
<script setup>
import HTML from "./example.html?raw"
import { initState } from "../init-state"

</script>