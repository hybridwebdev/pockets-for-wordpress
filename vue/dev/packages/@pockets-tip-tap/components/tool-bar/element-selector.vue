<template lang='pug'>
div(
    v-if='editor'
    class='d-flex gap-1 flex-grow-1'
)
    select(
        class='form-control rounded-0 p-1 border-0'
        @change='change'
    )
        option(
            v-for='(option, i) in options'
            :selected='option.isActive'
            :value='i'
        ) {{ option.text }}
    
    otherElements()

</template>
<script lang='ts' setup>
import otherElements from "./other-elements.vue"
import { injectEditor } from '@pockets-tip-tap'

import { computed } from "vue"

let editor = injectEditor()

let change = ($e) => {
    let v = options.value[$e.target.value] ?? false
    if(v && v.select && typeof v.select == 'function') v.select()
}

let makeHeadingOption = (level: number ) => ( {
    text: `Heading ${level}`,
    isActive:  editor.isActive( 'heading', { level } ),
    select: () => command( e => e.setHeading( { level } ) )
} )

let options = computed( () => [
    {
        text: "Paragraph",
        isActive: editor.isActive('paragraph'),
        select: () => command( e => e.setParagraph() )
    },
  
    {
        text: "Code",
        isActive: editor.isActive('codeBlock'),
        select: () => command( e => e.setCodeBlock() )
    },
    ...Array.from( { length: 6 }, (_, i) => makeHeadingOption( i + 1 ) ),
] )

let command = cb => new Promise( (resolve) => resolve( editor.chain().focus() ) ).then(cb).then( e => e.run() )

</script>