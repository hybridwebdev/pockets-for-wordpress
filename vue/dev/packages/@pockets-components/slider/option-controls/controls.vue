<template>
        
    <label class='grid-info-160' role="button">
        <span>Transition name</span>
        <input v-model='options.name' type='text' class='form-control rounded-0'>
    </label>
    <label class='grid-info-160' role="button">
        <span>Direction</span>
        <select v-model='options.direction' class='form-control rounded-0'>
            <option value='up'>Up</option>
            <option value='down'>Down</option>
            <option value='left'>Left</option>
            <option value='right'>Right</option>
        </select>
    </label>
    <label class='grid-info-160' role="button">
        <span>Rotate Interval</span>
        <input v-model='options.interval' type='number' class='form-control rounded-0'>
    </label>
    <label class='grid-info-160' role="button">
        <span>Animation Duration</span>
        <input v-model='options.duration' type='number' class='form-control rounded-0'>
    </label>

    <label class='grid-info-160' role="button">
        <span>Shift Count</span>
        <input step='1' v-model='options.shiftCount' type='number' class='form-control rounded-0'>
    </label>
    <label class='grid-info-160' role="button">
        <span>Starting Slide</span>
        <input v-model='options.index' type='number' class='form-control rounded-0' :min='0'>
    </label>
        
    <label class='grid-info-160' role='button'>
        <span>Pause when hovered</span>
        <input 
            v-model='options.pauseHovered' 
            type='checkbox'
            class='form-control-switch fs-30 ms-auto'
            :value-false='false'
            :value-true='true'
        >
    </label>
    <label class='grid-info-160' role='button'>
        <span>Debounce Rotation</span>
        <input 
            v-model='options.debounceRotation' 
            type='checkbox'
            class='form-control-switch fs-30 ms-auto'
            :value-false='false'
            :value-true='true'
        >
    </label>
    <label class='d-flex align-items-center' role='button'>
        <span>Swipeable</span>
        <input 
            v-model='options.swipeable' 
            type='checkbox'
            class='form-control-switch fs-30 ms-auto'
            :value-false='false'
            :value-true='true'
        >
    </label>
        
</template>
<script setup lang="ts">
import type { slideContainerProps } from "../"
let options = defineModel<slideContainerProps>('options')
</script>