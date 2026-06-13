<template>

    <label class="grid-info-120">
        <span>Mode</span>
        <button 
            @click="state.props.mode = state.props.mode == 'single' ? 'multiple' : 'single'"
            class="btn btn-accent-dk text-capitalize"
        >
            {{  state.props.mode }}
        </button>        
    </label>
    
    <label 
        class="grid-info-120"
        v-if="state.props.mode=='single'"
        role="button"
    >
        <span>Min open</span>
        <input
            type="checkbox"
            :true-value="1"
            :false-value="0"
            v-model="state.props.minOpen"
            class="form-control-switch ms-auto fs-30"
        />
    </label>

    <pockets-accordion 
        :trigger-options="{ class: 'btn btn-grey-700 text-start rounded-0 p-1', open: 'active' }"
        :content-options="{ class: `grid columns-1 gap-2`, open: `p-2 bg-grey-800` }"
        :open="open"
        :min-open="1"
    >
        
        <div class="grid columns-2 gap-2">
            <pockets-accordion-trigger ID="accordion-options" v-if="tabs.includes('accordion-options')">
                Edit Accordion Options
            </pockets-accordion-trigger>
            <pockets-accordion-trigger ID="overide-options" v-if="tabs.includes('overide-options')">
                Edit Override Options
            </pockets-accordion-trigger>
        </div>

        <pockets-accordion-content ID="accordion-options" class="" v-if="tabs.includes('accordion-options')">
            <div v-for="(item, k) in state.props.accordion" class="grid columns-1 gap-2">
                <span>{{ k }}</span>
                <div v-for="(field, fieldKey) in item">
                    <label class="grid-info-120">
                        <span>{{ fieldKey }}</span>
                        <input v-model="state.props.accordion[k][fieldKey]" class="form-control">
                    </label>
                </div>
            </div>
        </pockets-accordion-content>

        <pockets-accordion-content ID="overide-options" v-if="tabs.includes('overide-options')">
            <div v-for="(item, k) in state.props.options" class="grid columns-1 gap-2">
                <span>{{ k }}</span>
                <div v-for="(field, fieldKey) in item">
                    <label class="grid-info-120">
                        <span>{{ fieldKey }}</span>
                        <input v-model="state.props.options[k][fieldKey]" class="form-control">
                    </label>
                </div>
            </div>
        </pockets-accordion-content>
    </pockets-accordion>
</template>
<script setup>
import { ref } from "vue"
defineProps( {
    state: {},
    tabs: {
        type: Array,
        default: () => ['accordion-options', 'overide-options']
    }
} )
let open = ref( [
    'accordion-options'
] )
</script>