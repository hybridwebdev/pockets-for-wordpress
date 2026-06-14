---
route: "pockets vue/components/youtube/playlist/example"
component: "@pockets-components/youtube/components/play-list/index.vue"
tag: "youtube-playlist"
---
<template>
<pockets-story-demo-container
    :state="initialState"
    :init="init"
    local-storage="youtube-playlist-demo"
    #default="{state}"
>

    <div class="grid gap-2 columns-1 align-items-start">

        <pockets-story-demo
            :html="HTML"
            :state="state"
        />

        <div class="grid gap-1 bg-grey-800 p-1">

            <label class="text-primary-lt fs-20 fw-8">Videos</label>
            
            <pockets-ux-repeater
                v-model='state.props.items'
                v-bind='{
                    "layout": "tabbed",
                    "newItem": {
                        "videoId": "",
                        "playerVars": {
                            "start": 0
                        }
                    },
                    "minItems": 1,
                    "maxItems": 99999
                }'
            >

                <template #item-tab-text="{ item }">
                    <div class='grid columns-1 gap-1'>
                        <span>{{item.placeholderTitle ?? item.videoId}}</span>
                    </div>
                </template>

                <template #item="{ item }">

                    <youtube-option-panel 
                        :state='item'
                    />
                    
                </template>

            </pockets-ux-repeater>
    
        </div>
    
    </div>

     
</pockets-story-demo-container>
</template>
<script setup lang="ts">

import { $pockets } from "@pockets-core"
import { computedAsync } from '@vueuse/core'
import { watch } from "vue"
import { initialState } from "./inital-state";

let init = state => {

    state.value.props.playerVars.autoplay = 0

    watch( () => state.value.props.items.length, () => {

        if( state.value.props.current >= state.value.props.items.length -1 ) {
            state.value.props.current = state.value.props.items.length -1
        }

    }, { deep: true, immediate: true } )

}
 
const HTML = computedAsync(

    async () => {

        let res = await $pockets.crud( "wp" ).init( null ).read( {
            "load_template:render": {
                "template": "youtube/generic-playlist/main",
            }
        } )

        return res.render

    },
    "<div class='p-2 bg-black loading-container' loading=true>Loading demo. Please wait...</div>",
)
</script>
