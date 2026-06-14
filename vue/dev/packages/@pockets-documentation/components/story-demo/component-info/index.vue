<template>
<div 
    v-if="
        !componentInfo 
        || 
        !componentInfo.props && !componentInfo.emits && !componentInfo.slots && !componentInfo.description
    "
    class="border border-5 border-grey-500 bg-black p-2"
>
    No information available 
</div>
<div 
    v-if="componentInfo"
    class="grid columns-1 gap-0 fs-16"
>
    
    <!-- <h1 class="fs-20 text-primary-lt mb-2">Component Info</h1> -->

    <div class="grid columns-4 gap-0 border-5 border border-grey-500">

        <pockets-router-link
            :to="{
                path: route.path,
                query: { ...route.query, 'component-info-section': 'description' },
                hash: route.hash
            }"
            class="btn btn-grey-700 nav-tab"
            :class="{ 'active': open =='description' }"
            v-if="componentInfo.description && componentInfo.description.length > 0"
        >
            Description
        </pockets-router-link>

        <pockets-router-link
            :to="{
                path: route.path,
                query: { ...route.query, 'component-info-section': 'props' },
                hash: route.hash
            }"
            class="btn btn-grey-700 nav-tab"
            :class="{ 'active': open =='props' }"
            v-if="componentInfo.props"
        >
            Properties
        </pockets-router-link>

        <pockets-router-link
            :to="{
                path: route.path,
                query: { ...route.query, 'component-info-section': 'emits' },
                hash: route.hash
            }"
            class="btn btn-grey-700 nav-tab"
            :class="{ 'active': open =='emits' }"
            v-if="componentInfo.emits"
        >
            Emits
        </pockets-router-link>
        
        <pockets-router-link
            :to="{
                path: route.path,
                query: { ...route.query, 'component-info-section': 'slots' },
                hash: route.hash
            }"
            class="btn btn-grey-700 nav-tab"
            :class="{ 'active': open =='slots' }"
            v-if="componentInfo.slots"
        >
            Slots
        </pockets-router-link>

    </div>
    
    <div class="border-bottom border-start border-end border-5 border-grey-500">
        <div 
            v-if="componentInfo.description!=''"
            v-show="open =='description'"
            v-html="componentInfo.description"
            class="p-2 bg-black"
        ></div>

        <render-props-info
            :component-info="componentInfo"
            :accordion-options="accordionOptions"
            v-show="open =='props'"
            v-if="componentInfo.props"
        />
        
        <render-emits-info
            :component-info="componentInfo"
            :accordion-options="accordionOptions"
            v-show="open =='emits'"
            v-if="componentInfo.emits"
        />
        
        <render-slots-info
            :component-info="componentInfo"
            :accordion-options="accordionOptions"
            v-show="open=='slots'"
            v-if="componentInfo.slots"
        />
    </div>

</div>
</template>
<script setup lang="ts">

import { computed, getCurrentInstance } from "vue"
import { asyncComputed } from '@vueuse/core'
import renderPropsInfo from "./props.vue" 
import renderEmitsInfo from "./emits.vue" 
import renderSlotsInfo from "./slots.vue" 

import { parser } from "./use-parser"
import { resolveComponentDefinition } from '@pockets-core/utils/resolve-component-definition'

import { useRoute } from "vue-router"

let route = useRoute()

let open = computed(() => {
    
    if( route.query['component-info-section'] && componentInfoKeys.value.includes( route.query['component-info-section'] ) ) {
        return route.query['component-info-section']
    }

    return componentInfoKeys.value[0]

})

let instance = getCurrentInstance()

let componentInfo = asyncComputed( async () => {

    let { 
        tag = false,
        componentInfo = false
    } = route.meta

    let component = await resolveComponentDefinition( instance?.appContext.app, tag ?? false ) ?? {}

    return parser( component, componentInfo )

} )

let componentInfoKeys = computed( () => Object.keys( componentInfo.value ).filter( k => componentInfo.value[k] ) )

let accordionOptions = {
    "triggerOptions": {
        "open": "btn-grey-700",
        "class": "col-12 text-start rounded-0 fs-16 btn",
        "closed": "btn-grey-800"
    },
    "itemOptions": {
        "class": "bg-grey-700 border border-5 border-grey-600"
    },
    "contentOptions": {
        "open": "bg-grey-800 border-5 border-top border-grey-600",
    },
}

</script>
