<template>
    <pockets-accordion 
        class="grid columns-1 gap-1 p-1 bg-black"
        mode="multiple"
        v-bind="accordionOptions"
    >
        <div v-if="!componentInfo.props">
            No properties found.
        </div>
        <pockets-accordion-item
            v-if="componentInfo.props"
            v-for="(prop, name) in componentInfo.props"
            :ID="name"
        >
            <pockets-accordion-trigger>
                <div class="grid-info-180 fs-18">
                    {{ name }} 
                    <div class="d-flex gap-2">
                        <span v-if="prop.isVmodel" class="text-danger fs-12 p-1" v-tooltip="`This property can be two-way bound using v-model:${name}`">V-Model</span>
                        <span v-if="prop.required" class="text-primary-lt fs-12 p-1" v-tooltip="'This property is required'">Required</span>
                    </div>
                </div>
            </pockets-accordion-trigger>
            <pockets-accordion-content>
                <div class="p-1 grid columns-1 gap-0 bg-black">
                    
                    <div class="grid-info-120 gap-0 align-items-stretch" 
                        v-if="prop.types"
                    >
                        <div class="bg-grey-700 p-2">Type</div>
                        <pockets-ux-code-block  
                            :code="prop.types"
                            :copy-enabled="false"
                            lang="ts"
                        />
                    </div>
                    <div class="grid-info-120 gap-0 align-items-stretch" v-if="prop.default">
                        <div class="bg-grey-700 p-2">Default</div>
                        <div class="bg-grey-600">
                            <pockets-ux-code-block 
                                :code="prop.default" 
                                :copy-enabled="false"
                                lang='ts'
                            />
                        </div>
                    </div>
                    <div class="grid gap-0 columns-1 border-1 border-top border-accent-lt" v-if="prop.description">
                        <div class="bg-grey-800 p-2" v-html="prop.description"/>
                    </div>
                </div>
            </pockets-accordion-content>
        </pockets-accordion-item>
    </pockets-accordion>
</template>
<script setup lang="ts">

interface props {
    componentInfo: object
    accordionOptions: object
}

let props = withDefaults(defineProps<props>(), {

} )
</script>
 