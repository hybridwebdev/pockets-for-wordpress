<template>
    <slot :errors="errors" v-if="errors.message.length > 0">
        <div class="grid columns-1 gap-1">
            <div 
                v-for="(msg, i) in errors.message" 
                :key="i" 
                class="alert alert-danger"
            >
                {{ msg }}
            </div>
        </div>
    </slot>
</template>
<script setup lang="ts">

/**
    This component is used to display an instance of the WP_Error class.
    Will dissplay any messages under the errors property.
*/
interface $props {
  errors?: {
    message: string[]
  }
}

defineOptions( {
    inheritAttrs: false
} )

withDefaults( defineProps<$props>(), {
  errors: () => ( { message: [] } )
})

defineSlots<{

    /**
        Can be used to override error rendering. Only renders if there's at least one 
        message in errors.
        @binding {{ message: string[] }} errors the errors prop passed in.
    */
    default: {}

}>()
</script>
