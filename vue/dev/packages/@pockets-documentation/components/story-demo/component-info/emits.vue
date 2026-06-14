<template>
    <div class="p-1 grid columns-1 gap-1 bg-black">
        <div v-for="(emit, name) in componentInfo.emits" class="grid columns-1 gap-0">
            <div class="grid-info-120 gap-0 align-items-stretch">
                <span class="bg-grey-700 p-2">Name</span>
                <span class="bg-grey-800 p-2">{{ name }}</span>
            </div>
            <div class="grid gap-0 columns-1 border-1 border-top border-accent-lt" v-if="emit.description">
                <div class="bg-grey-800 p-2" v-html="emit.description"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
interface props {
    componentInfo: object
    accordionOptions: object
}

let props = withDefaults(defineProps<props>(), {

} )
</script>
