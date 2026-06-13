<template lang='pug'>
Teleport(
    to='body'
)
    div(
        class='mx-auto floating-menu bg-accent-dk fs-16 shadow-menu border-5 border-primary-dk border'
        v-if='shown'
        ref='container'
    )
        div( 
            ref='handle' 
            class='col-12 p-1 text-white border-5 border-primary-dk border-bottom'
            role='button'
        ) HTML Editor
        div(
            class='col-12 p-1 d-flex gap-1 justify-content-stretch flex-wrap'
        )
            slot()
    pockets-ux-movable( 
        v-if="container && handle"
        :target='container' 
        :dragTarget='handle' 
        :draggable="true" 
        :resizable='false'
    )   
</template>
<script lang='ts'>   
import { setup } from "./setup"
export default {
    setup,
    inheritAttrs: false
}
</script>
<style scoped lang="scss">
.floating-menu {
    z-index: 20;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 768px;
    :deep() {
        label {
            color: #fff;
            margin: 0;
        }
    }
}
</style>