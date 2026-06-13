---
tag: "pockets-ux-movable"
route: "pockets vue/components/ux/movable/example"
component: "@pockets-components/UX/moveable/index.vue"
---
<template>
<pockets-story-demo-container
    :state="initState"
>
    <template #default="{ state }">
        <div class="position-relative">
            <pockets-story-demo
                :state="state"
                :html="HTML"
            >
                <template #demo>
                    <div style="height: 100px">
                        <render-html 
                            :innerHTML="HTML" 
                            :state="state" 
                        />
                    </div>
                </template>
            </pockets-story-demo>
        </div>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">
import HTML from "./example.html?raw"
let initState = () => ({
    props: {
    }
})
</script>
<style lang="scss" src="./style.scss"/>