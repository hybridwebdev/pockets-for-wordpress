<template>
    <div v-if="mode=='slot'">
        <div 
            class="alert alert-danger grid columns-1 gap-1" 
            v-if="loaderOptions.apiKey==''"
        >
            <p>Enter your api key to see the demo.</p>
            <p>Note, this key will be saved to your devices storage temporarily.</p>
            <p>You will need to refresh the page once after entering your key.</p>
        </div>
        <slot 
            v-bind="loaderOptions"
            v-if="loaderOptions.apiKey!=''"
        ></slot>
    </div>

    <div v-if="mode=='controls'">
        <div class="grid-info-120">
            Api Key
            <input 
                v-model="loaderOptions.apiKey" 
                placeholder="Enter your google maps API key"
                class="form-control"
            >
        </div>
    </div>

</template>
<script setup lang="ts">
import { loaderOptions, mapOptions } from "../shared/use-loader-options"

defineOptions( {
    loaderOptions,
    mapOptions
} )

interface $props {
    mode?: "slot" | "controls"
}

let props = withDefaults( defineProps<$props>(), {
    mode: 'slot'
} )

</script>