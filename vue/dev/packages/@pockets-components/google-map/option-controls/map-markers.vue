<template>
    <pockets-ux-repeater
        v-model='options'
        :max-items="10"
        :min-items="1"
        :new-item='{
            title: "Hello world",
            position: {
                lat: 0,
                lng: 0
            }
        }'
    >
        <template #item-tab-text='{ item }'>
            Lat: {{ item.position.lat }} Lng: {{item.position.lng}}
        </template>
        <template #item='{ item }'>
            <label 
                class='grid-info-120'
                v-tooltip='"Sets what is shown when marker is hovered"'
            >
                <span>Title</span>
                <input 
                    v-model='item.title'
                    class='form-control'
                    
                >
            </label>
            <div class='grid columns-2 gap-1'>
                <label 
                    class='grid columns-1 gap-1'
                    v-tooltip='"Markers lat coordinate"'
                >
                    <span>Lat</span>
                    <input 
                        v-model='item.position.lat'
                        class='form-control'
                        :min='-85'
                        :max="85"
                        type='number'
                    >
                </label>
                <label 
                    class='grid columns-1 gap-1'
                    v-tooltip='"Markers lng coordinate"'
                >
                    <span>Lng</span>
                    <input 
                        v-model='item.position.lng'
                        class='form-control'
                        :min='-180'
                        :max="180"
                        type='number'
                    >
                </label>
            </div>
        </template>

    </pockets-ux-repeater>
</template>
<script setup lang="ts">
import type { google } from "../types/google-maps"
let options = defineModel<[ google.maps.marker.AdvancedMarkerElementOptions ]>( "options", {
    required: true,
    default: []
} )
</script>