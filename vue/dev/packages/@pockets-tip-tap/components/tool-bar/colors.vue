<template lang='pug'>
pockets-ux-color-picker(
    v-model='textStyle.color'
    position='top'
    class='border border-2 border-accent-lt'
    style='width: 40px'
    v-if='show'
    :tooltip='"Text Color"'
)
pockets-ux-color-picker(
    v-model="textStyle['background-color']"
    position='top'
    class='border border-2 border-accent-lt'
    style='min-width: 40px'
    :tooltip='"Background Color"'
    v-if='show'
)
        //- a
</template>
<script lang='ts' setup>

import { injectEditor } from '@pockets-tip-tap'
import { computed } from 'vue'

let editor = injectEditor()

let { textStyle } = editor.$editorApi.selection.node

let show = computed( () => editor.$editorApi.hasField('text-styling') && editor.$editorApi.hasTextSelection )

</script>