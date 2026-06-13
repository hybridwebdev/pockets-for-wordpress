<template>
    <div class="d-flex bg-grey-800 px-2 pockets-dashboard-dev-bar border-start border-end border-top border-5 border-grey-500" v-if="story && story.header">
        <div class="d-flex gap-0 justify-content-end flex-grow-1">
            <div class="align-items-stretch" v-if="story.header.resolvedPath">

                <div class="bg-grey-700 d-flex" >
                    <a 
                        target='_self' 
                        :href="`vscode://file/${story.header.resolvedPath}`" 
                        class="p-1 px-2 text-grey-md"
                        v-tooltip="story.header.resolvedPath"
                    >
                        View target file
                    </a>
                    <pockets-ux-copy :source='story.header.resolvedPath' #default="{copy}">
                        <button 
                            class="btn btn-accent-dk text-white p-1 text-start rounded-0 border-0 fa fa-copy ms-auto" 
                            v-tooltip="'Click to copy file path'"
                            @click="copy"
                        />
                    </pockets-ux-copy>
                    
                </div>
            </div>

            <div class="align-items-stretch" v-if="story.header.storyPath">

                <div class="bg-grey-700 d-flex">
                    <a 
                        target='_self' 
                        :href="`vscode://file/${story.header.storyPath}`" 
                        class="p-1 px-2 text-grey-md"
                        v-tooltip="story.header.storyPath"
                    >
                        View story file
                    </a>
                    <pockets-ux-copy :source='story.header.storyPath' #default="{copy}">
                        <button 
                            class="btn btn-accent-dk text-white p-1 text-start rounded-0 border-0 fa fa-copy ms-auto" 
                            v-tooltip="'Click to copy file path'"
                            @click="copy"
                        />
                    </pockets-ux-copy>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { context } from "@pockets-documentation"
let story = context.inject.story()
</script>
<style lang="scss" scoped>
   .pockets-dashboard-dev-bar {
        grid-row: 1;
        grid-column: 1 / span 2
    }
 
</style>