<template lang='pug'>
slot( :copied='copied' :copy='copy' )
</template>
<script setup lang="ts">

import { useClipboard } from '@vueuse/core'
import { $pockets }  from "@pockets-core"

/*
    @component-description
    A renderless component that utilizes <a href='https://vueuse.org/core/useclipboard/'>useClipboard</a> to provide an api for copying content
    to the clipboard.
*/
type props = {

    /**
        Content that is copied to clipboard when copy is fired. 
    */ 
    source: string
    /**
        Callable function that is invoked when copy method is called.
        By default, will show toast message. 
    */
    success?: Function
    
}

let props = withDefaults( defineProps<props>(), {
    success: () => $pockets.toast.success("Copied to clipboard")
} )

let { copy:doCopy, copied } = useClipboard( { legacy: true } )

let copy = () => {
    doCopy( props.source )
    props.success()
} 


defineSlots<{
    /**
        Provides api for clipboard
        @binding {function() } copy When called, will copy source to clipboard.
        @binding { reactive<Boolean> default = false } copied When content is copied to clipboard, this will temporarily change to true.
    */
    default: {}
}>()

</script>
 