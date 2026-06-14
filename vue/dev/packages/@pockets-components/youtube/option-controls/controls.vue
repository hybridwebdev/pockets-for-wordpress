<template>
 
<label 
    class='grid-info-120 gap-2' 
    v-tooltip='"ID of video "'
>
    <span>Video ID</span>
    <input v-model='state.videoId' class='form-control'>
</label>

<label 
    class='grid-info-120 gap-2' 
    v-tooltip='"Time in seconds video will start at"'
>
    <span>Start</span>
    <pockets-ux-time-input v-model='state.playerVars.start'/>
    <!-- <input v-model='state.playerVars.start' class='form-control'> -->
</label>    

<label 
    class='grid-info-120 gap-2' 
    v-tooltip='"Time in seconds video will end at"'
>
    <span>End</span>
    <!-- <input v-model='state.playerVars.end' class='form-control'> -->
    <pockets-ux-time-input v-model='state.playerVars.end'/>
</label>

<label 
    class='grid-info-120 gap-2' 
    v-tooltip='"Change speed video plays at"'
>
    <span>Play Speed</span>
    <pockets-ux-range-slider 
        class="col-12"
        :step='.1' 
        :min='.1' 
        :max='2' 
        v-model.number='state.playerVars.rate' 
    ></pockets-ux-range-slider>
</label>

<label 
    class='grid-info-120 gap-2' 
    v-tooltip='"Toggle video auto play"'
>
    <span>Autoplay</span>
    <input 
        v-model='state.playerVars.autoplay' 
        class="form-control-switch fs-30 ms-auto" 
        type="checkbox" 
        :true-value='1'
        :false-value='0'
    >
</label>

<label 
    class='grid-info-120 gap-2' 
    v-tooltip='"Starts video with volume muted"'
>
    <span>Mute</span>
    <input 
        v-model='state.playerVars.mute' 
        class="form-control-switch fs-30 ms-auto" 
        type="checkbox" 
        :true-value='1'
        :false-value='0'
    >
</label>

<label 
    class='grid-info-120 gap-2' 
    v-tooltip='"Starts video with volume muted"'
    v-if='!state.playerVars.mute'
>
    <span>Volume</span>
     
    <pockets-ux-range-slider 
        class="col-12"
        :step='1' 
        :min='0' 
        :max='100' 
        v-model.number='state.volume' 
    ></pockets-ux-range-slider>

</label>

<label 
    class='grid-info-120 gap-2' 
    v-tooltip='"If set to on, video will repeat using the start/end values"'
>
    <span>Loop</span>
    <input 
        v-model='state.playerVars.loop' 
        class="form-control-switch fs-30 ms-auto" 
        type="checkbox" 
        :true-value='1'
        :false-value='0'
    >
</label>

<label 
    class='grid-info-120 gap-2' 
    v-tooltip='"Toggle showing player controls"'
>
    <span>Show Controls</span>
    <input 
        v-model='state.playerVars.controls' 
        class="form-control-switch fs-30 ms-auto" 
        type="checkbox" 
        :true-value='1'
        :false-value='0'
    >
</label>

<label 
    class='grid-info-120 gap-2' 
    v-tooltip='"Sets width of player"'
>
    <span>Player Style</span>
    <textarea v-model='state.playerStyle' class='form-control'/>
</label>

<label 
    class='grid-info-120 gap-2' 
    v-tooltip='"Sets width of player"'
>
    <span>Width</span>
    <input v-model='state.width' class='form-control'>
</label>

<label 
    class='grid-info-120 gap-2' 
    v-tooltip='"Sets height of player"'
>
    <span>Height</span>
    <input v-model='state.height' class='form-control'>
</label>

<label 
    class='grid-info-120 gap-2' 
    v-tooltip='"If set to true, video player will not autoload. Instead, a placeholder will show until user clicks it. If autoplay is enabled, video will still autoplay."'
>
    <span>Show Placeholder</span>
    <input 
        v-model='state.showPlaceholder' 
        class="form-control-switch fs-30 ms-auto" 
        type="checkbox" 
        :true-value='true'
        :false-value='false'
    >
</label>

<label 
    class='grid-info-120 gap-2' 
    v-tooltip='"If set to true, Overlay will show until video playback starts. Overlay shows a play button and the title"'
    v-if="state.showPlaceholder"
>
    <span>Show Overlay</span>
    <input 
        v-model='state.showOverlay' 
        class="form-control-switch fs-30 ms-auto" 
        type="checkbox" 
        :true-value='true'
        :false-value='false'
    >
</label>

<label 
    class='grid-info-120 gap-2' 
    v-tooltip='"Used to control title shown on placeholder"'
    v-if="state.showPlaceholder && state.showOverlay"
>
    <span>Placeholder Title</span>
    <input 
        v-model='state.placeholderTitle' 
        class="form-control" 
        type="text" 
    >
</label>
</template>
<script setup>
defineProps({
    state: {}
})
</script>