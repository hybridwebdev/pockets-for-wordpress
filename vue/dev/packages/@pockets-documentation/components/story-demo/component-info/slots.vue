<template>
    <pockets-accordion
        v-bind='accordionOptions'
        :min-open="0"
        class="p-1 bg-black grid columns-1 gap-1"
    >
        <pockets-accordion-item
            v-for="(slot, k) in componentInfo.slots" 
            :ID="k"
        >
            <pockets-accordion-trigger class="grid-info-120">
                {{ k }}
            </pockets-accordion-trigger>

            <pockets-accordion-content>
                <div class="p-2 bg-black grid columns-1 gap-2">
                    <div v-if="slot.description" class="grid columns-1 gap-2">
                        <span class="text-primary-lt fs-18">
                            Description
                        </span>
                        <div v-html="slot.description" class=" "/>
                    </div>
                    <div 
                        class="grid columns-1 gap-2"
                        v-if="slot.bindings"
                    >
                        <span 
                            class="text-primary-lt fs-18"
                            v-tooltip="{ 
                                content: 'These are the properties provided to the slot',
                                placement: 'top-start'
                            }"
                        >
                            Scoped Properties
                        </span>
                        <div 
                            v-for="binding in slot.bindings" 
                            class="grid columns-1 gap-0"
                        >
                            <div class="grid-info-160 gap-0 align-items-stretch">
                                <span class="bg-grey-700 p-1 grid align-items-center text-break">{{ binding.name }}</span>
                                <pockets-ux-code-block 
                                    class="bg-grey-800"
                                    :code="binding.type.name ?? 'None'" 
                                    :copy-enabled="false"
                                />
                            </div>
                            <div v-if="binding.description" class="border-1 border-top border-accent-lt">
                                <div class="bg-grey-800 p-2">{{ binding.description }}</div>
                            </div>
                        </div>
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
 