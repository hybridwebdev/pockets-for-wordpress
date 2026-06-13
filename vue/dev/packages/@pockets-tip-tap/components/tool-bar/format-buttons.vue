<template lang='pug'>
button( 
    class='btn btn-accent-dk border border-5 border-primary-dk rounded-0 p-1'
    @click="editor.chain().focus().toggleStrike().run()"
    :class="[ { 'active': editor.isActive('strike') }, btnClass ]"
    v-tooltip='"Toggle Strikethrough"'
    v-if='show'
)
    i(class='fa fa-strikethrough')

</template>
<script lang='ts' setup>
import { injectEditor } from '@pockets-tip-tap'
import { computed } from 'vue';
let editor = injectEditor()
let { $editorApi } = editor
let btnClass = 'rounded-0 border-0 p-1'

let show = computed(() =>  $editorApi.hasField('text-styling') && $editorApi.hasTextSelection )

</script>