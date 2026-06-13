<template>
    <label 
        class='grid-info-120'
        v-tooltip='"Centering type"'
    >
        <span>Center on</span>
        <div class='d-flex gap-1 align-items-center'>
            <select 
                class='form-control'  
                v-model='options.centerOn'
            >
                <option
                    value='markers'
                >
                    Center on Markers
                </option>
                <option
                    value='manual'
                >
                    Manual
                </option>
            </select>
        </div>

    </label>
    <label 
        v-if='options.centerOn == "manual"'
        class='grid-info-120'
        v-tooltip='"Coordinates used to center map"'
    >
        <span>Center</span>
        <div class='grid columns-2 gap-1'>
            <label 
                class='grid columns-1 gap-1'
            >
                <span>
                    Lat
                </span>
                <input 
                    v-model='options.mapOptions.center.lat'
                    class='form-control'
                    type='number'
                >
            </label>

            <label 
                class='grid columns-1 gap-1'
            >
                <span>
                    Lng
                </span>
                <input 
                    v-model='options.mapOptions.center.lng'
                    class='form-control'
                    type='number'
                >
            </label>
        </div>
    </label>
    
    <label 
        class='grid-info-120'
        v-tooltip='"Zoom level"'
    >
        <span>Zoom</span>
        
        <pockets-ux-range-slider
            v-model='options.mapOptions.zoom'
            :min='1'
            :max='20'
            :step='1'
        ></pockets-ux-range-slider>

    </label>

    <label 
        v-tooltip='"Applies additional styling through style tag"'
        class='grid columns-1 gap-1'
    >
        <span>Style</span>
        <textarea 
            class='form-control'
            v-model='options.mapOptions.style' 
        />
    </label>

    <span class='fw-8 text-accent-dk'>Basic Controls</span>

    <render-option
        v-for="option in sections.basic"
        v-bind="option"
        :options="options"
    />
     
    <span class='fw-8 text-accent-dk'>Advanced Controls</span>

    <render-option
        v-for="option in sections.advanced"
        v-bind="option"
        :options="options"
    />

</template>
<script setup lang="ts">
// @ts-nocheck
import type { mapLoaderProps } from "../"
import { compile, h } from "vue"

let options = defineModel<Pick<mapLoaderProps, 'centerOn' | 'mapOptions'>>('options', {
    required: true
})

let sections = {
    basic: [
        {
            label : "Street View",
            tip: "Toggle Street View Controls",
            optionKey: "streetViewControl"
        },
        {
            label: "Draggable", 
            tip: "Toggle draggable", 
            optionKey: "draggable" 
        },
        {
            label: "Zoom controls", 
            tip: "Zoom controls", 
            optionKey: "zoomControl" 
        },
        {
            label: "Fullscreen Controls",
            tip: "Toggle Fuillscreen Controls",
            optionKey: "fullscreenControl"
        },
    ],
    advanced: [
        {
            label: "Scroll Wheel",
            tip: "Scroll Wheel",
            optionKey: 'scrollwheel'
        },
        {
            label: "Tilt Interacion",
            tip: "Toggle tilt interactions",
            optionKey: "tiltInteractionEnabled"
        },
        {
            label: "Map type Control",
            tip: "Toggle map type controls",
            optionKey: "mapTypeControl"
        },
        {
            label: "Clickable Icons",
            tip: "Toggle clickable icons",
            optionKey: "clickableIcons"
        },
        {
            label: "Rotate Control",
            tip: "Toggle Rotate Controls",
            optionKey: "rotateControl"
        },
        {
            label: "Scale Control",
            tip: "Toggle Scale Controls",
            optionKey: "scaleControl"
        }
    ]
}
let renderOption = props => h( compile(`
    <label class='grid-info-120'>
        <span>{{label}}</span>
        <input 
            class='form-control-switch fs-30 ms-auto'
            v-model='options.mapOptions[optionKey]'
            :true-value='true'
            :false-value='false'
            type='checkbox'
        >
    </label>
`), props )
</script>