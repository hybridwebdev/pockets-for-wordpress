<template>

    <h1 class="fw-8 fs-26 fs-24 text-primary-lt m-0 p-1" v-if="story.title">
        {{ story.title }}
    </h1>
        
    <div class="grid columns-1 gap-half">

        <div class="grid-info-cq-sm-120 bg-black align-items-stretch gap-cq-sm-0" v-if="story.directiveName">
            <span class="p-1 d-flex align-items-center">Directive</span>

            <div class="bg-grey-800 d-flex">
                <span class="p-1 px-2">{{ story.directiveName }}</span>
                <pockets-ux-copy #default="{ copy }" :source="story.directiveName">
                    <button 
                        class="btn btn-accent-dk text-white p-1 text-start rounded-0 border-0 fa fa-copy ms-auto" 
                        v-tooltip="'Click to copy'"
                        @click="copy"
                    />
                </pockets-ux-copy>
                
            </div>
        </div>

        <div class="grid-info-cq-sm-120 bg-black align-items-stretch gap-cq-sm-0" v-if="story.tag">
            <span class="p-1 d-flex align-items-center">Tag</span>

            <div class="bg-grey-800 d-flex">
                <span class="p-1 px-2">{{ `<${story.tag}>` }}</span>
                <pockets-ux-copy #default="{ copy }" :source="`<${story.tag}>`">
                    <button 
                        class="btn btn-accent-dk text-white p-1 text-start rounded-0 border-0 fa fa-copy ms-auto" 
                        v-tooltip="'Click to copy'"
                        @click="copy"
                    />
                </pockets-ux-copy>
                
            </div>
        </div>
        <!-- <pockets-ux-code-block :code="story"></pockets-ux-code-block> -->
        <div 
            class="grid-info-cq-sm-120 bg-black align-items-stretch gap-cq-sm-0" 
            v-if="story.header.sourceFile"
        >
        
            <span class="p-1 d-flex align-items-center">File</span>

            <div class="bg-grey-800 d-flex" 
                v-tooltip="{content: story.header.missingSourceFile && 'Could not find file' }"
            >
                
                <span 
                    class="p-1 px-2 d-flex gap-1 align-items-center" 
                    :class="{'text-warning': story.header.missingSourceFile }"
                    
                >
                    {{ story.header.sourceFile }}
                    <i class="fa fa-warning" v-if='story.header.missingSourceFile'></i>
                </span>

                <pockets-ux-copy #default="{ copy }" :source='story.header.sourceFile'>

                    <button 
                        class="btn btn-accent-dk text-white p-1 text-start rounded-0 border-0 fa fa-copy ms-auto" 
                        v-tooltip="'Click to copy'"
                        @click="copy"
                    />

                </pockets-ux-copy>
                
            </div>
        </div>
        
        <demo-state-ux/>

    </div>

</template>
<script setup>
import { computed } from 'vue'
import { context } from "@pockets-documentation"

import { $pockets } from "@pockets-core"
import demoStateUx from "./demo-state-ux.vue"

let story = context.inject.story()
 
</script>
