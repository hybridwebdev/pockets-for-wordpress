<template>
<slot/>
</template>
<script setup>
defineOptions({
    inheritAttrs: false
})
    /*
        THe entire point of this component is to prevent recusive apps from compiling.
    */
</script>