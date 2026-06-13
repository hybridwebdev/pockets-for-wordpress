---
route: "pockets vue/sandbox"
title: "Sandbox"
---
<template>
<pockets-story-demo-container
    :state="initState"
    local-storage="pockets-vue-sandbox"
    #default="{ state }"
>

    <pockets-story-demo 
        v-model:state="state.props.state"
        :html="state.props.innerHTML"
        #demo="{error}"
    >   

        <div v-if="!error" class="grid gap-1">

            <span class="text-primary-lt">Results</span>
            
            <render-html 
                :innerHTML="state.props.innerHTML" 
                :state="state.props.state" 
                
            />
            
        </div>

        <pockets-temp-state
            v-model:state="state.props"
            #default="{ state:temp, update, cancel, hasChanges }"
            
        >   

            <span class="text-primary-lt">HTML</span>

            <pockets-ux-code-editor
                v-model="temp.innerHTML"
            />

            <span class="text-primary-lt">Data</span>

            <pockets-ux-json-editor
                v-model="temp.state"
            />

            <div class="grid columns-2 gap-2">
                <button 
                    @click="update"
                    class="btn btn-confirm p-2"
                    :disabled="!hasChanges"
                >Update</button>
                <button 
                    @click="cancel"
                    class="btn btn-danger p-2 text-white"
                    :disabled="!hasChanges"
                >Cancel</button>
            </div>
        
        </pockets-temp-state>

    </pockets-story-demo>
    
</pockets-story-demo-container>
</template>
<script setup lang="ts">

let initState = {
    props: {
        state: {
            foo: "bar",
        },
        innerHTML: "Edit this content {{foo}}"
    }
}
</script>