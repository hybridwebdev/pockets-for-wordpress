<template>
  <div v-html="compiledMarkdown" ref="root"/>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, nextTick, watch } from 'vue'
import { Marked } from 'marked'

import 'highlight.js/styles/stackoverflow-dark.css'

import hljs from "@pockets-core/utils/highlight.js"

interface Props { 
  content: string 
  /**
    Controls whether copy button is used on code blocks
  */
  copyEnabled?: "true" 
}

const props = withDefaults( defineProps< Props >(), {
  copyEnabled: 'true'
} )

const root = ref<HTMLElement | null>( null )

const marked = new Marked()

const compiledMarkdown = computed( () => marked.parse( props.content ) )

function runHighlighting() {
  nextTick( () => root.value?.querySelectorAll('pre code').forEach( ( el ) => {
    el.setAttribute('hljs-copy-enabled', props.copyEnabled )
    hljs.highlightElement( el as HTMLElement )
  } ) )
}

onMounted( runHighlighting )

watch( () => props.content, runHighlighting )

</script>
