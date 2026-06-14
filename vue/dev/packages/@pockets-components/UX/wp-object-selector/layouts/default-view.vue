<template>

    <slot name="hidden-input" v-bind="api" :selected="api.selected.value">
        <hidden-input />
    </slot>
    <slot name='before' v-bind="api" :selected="api.selected.value" />

    <pockets-popper
        :autoHide="true"
        :triggers='["click"]'
        :delay='0'
        :positioning-disabled="true"
        theme="popup-menu"
    >

        <template #popper>

            <div 
                v-bind='$attrs'  
                class='loading-container grid columns-1 gap-2'
                :loading='connection.loading || busy'
            >

                <slot name="controls" v-bind="api" :selected="api.selected.value">
                    <controls />
                </slot>

                <slot name="view" v-bind="api" :selected="api.selected.value">
                    <images />
                </slot>

            </div>

        </template>
        <slot name="default" :api="api" :selected="api.selected.value"/>

    </pockets-popper>

    <slot name='after'  v-bind="api" :selected="api.selected.value" />

</template>
<script setup lang="ts">

import controls from "../views/controls.vue"
import images from "../views/images.vue"
import hiddenInput from "../views/hidden-input.vue"

import { context } from "../context"

let api = context.inject.api()
let { connection, busy } = api

defineOptions({
    inheritAttrs: false
})
 
</script>