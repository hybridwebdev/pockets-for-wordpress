<template>
    <div class='grid columns-1 gap-2'>

        <div class="d-flex gap-1 position-sticky pt-1 top-0 control-box">
            
            <div class='d-flex gap-0 flex-grow-1'>
                <input 
                    v-model='filterText' 
                    class='form-control rounded-0' 
                    placeholder='Enter text to filter results'
                />
                <button 
                    class='btn btn-danger text-white fa fa-times fw-8 rounded-0' 
                    @click='filterText = ""'
                    v-tooltip='"Clear Search"'
                />
            </div>
            
            <button 
                class="btn btn-outline-primary-dk rounded-0"
                @click="changeMode"
                style="width: 100px"
                v-tooltip="'Changes how elements are shown'"
            >
                {{ displayMode == "list" ? "List" : "Group" }}
            </button>

        </div>
        
        <div class="grid columns-1 gap-1">

            <div 
                class='grid columns-2 gap-1 col-12' 
                v-if="displayMode == 'list'"
            >

                <button 
                    v-for='node in nodeList' 
                    @click='select(node)'
                    class='p-1 btn btn-accent-dk d-flex gap-1 align-items-center fw-8 border-0 rounded-0'
                    :class='isSelected(node)'
                >
                    {{node.title}}
                </button>
                
            </div>

            <div 
                v-for="nodeList, k in nodeGroup" 
                class="grid columns-1 gap-1 border-1 border-bottom border-primary-dk pb-2" 
                v-if="displayMode =='grouped'"
            >
                
                <span class="text-primary-dk fw-8 fs-20">{{ k }}</span>

                <div class='grid columns-2 gap-1 col-12'>

                    <button 
                        v-for='node in nodeList' 
                        @click='select(node)'
                        class='p-1 btn btn-accent-dk d-flex gap-1 align-items-center fw-8 border-0 rounded-0'
                        :class='isSelected(node)'
                    >
                        {{node.title}}
                    </button>

                </div>

            </div>

        </div>

        <span v-if='nodeList.length ==0' class='fw-8'>
            No elements found containing {{filterText}}.
        </span>

    </div>
</template>
<script>

import { setup, props } from "./setup"
import { computed } from "vue"

import { chain } from "lodash"

export default {

    props,
    setup: (props, ctx) => {

        let api = setup(props, ctx)

        let nodeList = computed( () => {
            return api.nodeList.value.filter( schema => {
                if( schema['can-add'] === false ) {
                    return false
                }
                return true
            })
        } )

        let nodeGroup = computed( () => chain( nodeList.value )
            .groupBy( 'group' )
            .toPairs()
            .sort((a, b) => a[0].localeCompare( b[0] ) )
            .fromPairs()
            .value()
        )

        return {
            ...api,
            nodeList,
            nodeGroup
        }

    }, 

}
</script>

<style lang="scss">

.control-box {
    --color: var(--bs-white);
    background-color: var(--color);
    box-shadow:  0 0px 0 0 var(--color),    /* top */
                0px 0 0 0 var(--color),   /* right */
                0 10px 0 0 var(--color),  /* bottom */
                0px 0 0 0 var(--color);   /* left */
}

</style>