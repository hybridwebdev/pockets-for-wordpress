<template lang='pug'>
    button(
        v-for='(option, i) in options'
        :selected='option.isActive'
        :value='i'
        @click='option.select'
        :class='{active: option.isActive}'
        class='btn btn-accent-dk'
        v-tooltip="option.tooltip"
        :key='option.icon'
    ) 
        i( :class='option.icon' )
</template>
<script lang='ts' setup>

import { injectEditor } from '@pockets-tip-tap'

import { computed } from "vue"

let editor = injectEditor()
 
let options = computed( () => [
    {
        tooltip:"Toggle Block Quote",
        isActive: editor.isActive('blockquote'),
        icon: "fa-solid fa-quote-right",
        select: () => command( e => e.toggleBlockquote() )
    },
    {
        tooltip: "Toggle List - Unordered",
        isActive: editor.isActive('bulletList'),
        icon: "fa-solid fa-list",
        select: () => command( e => e.toggleBulletList() )
    },
    {
        tooltip: "Toggle List - Ordered",
        isActive: editor.isActive('orderedList'),
        icon: "fa-solid fa-list-ol",
        select: () => command( e => e.toggleOrderedList() )
    },
] )

let command = cb => new Promise( resolve => resolve( editor.chain().focus() ) ).then(cb).then( e => e.run() )

</script>