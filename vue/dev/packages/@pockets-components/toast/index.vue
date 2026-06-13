<template>
<slot v-bind="$pockets.toast"/>
</template>
<script lang="ts" setup>
import { $pockets } from '@pockets-core'
defineSlots<{
    /**
        Provides toast api.
        @binding {function( message: string )} success Shows success message.
        @binding {function( message: string )} warn Shows success message.
        @binding {function( message: string )} error Shows success message.
    */
    default: {}
}>()
</script>
