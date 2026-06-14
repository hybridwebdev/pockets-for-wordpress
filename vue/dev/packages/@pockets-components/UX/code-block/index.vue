<template lang='pug'>

pre(
    class='pockets-ux-code-block m-0 d-flex' 
    v-bind='$attrs' 
)
    code(
        ref='codeBlock' 
        :hljs-copy-enabled='copyEnabled'
        :class="[`language-${lang}`]"
    ) {{ code }}

</template>
<script setup lang="ts">

import { computed, ref, nextTick, watchEffect }  from "vue"

import 'highlight.js/styles/stackoverflow-dark.css'
import hljs from "@pockets-core/utils/highlight.js"

defineOptions({
    inheritAttrs: false
})

type props = {

    /**
        If true, copy button will show on editor. 
    */
    copyEnabled?: boolean

    /**
        Code
    */
    code: string | object | [] | Number 

    /**
        Language to display codeblock in. 
    */
    lang?: string

}

let props = withDefaults(defineProps<props>(), {
    copyEnabled: true,
    lang: "javascript"
} )

let codeBlock = ref<HTMLElement>()

let code = computed( () => {

    if( typeof props.code === 'string' ) {
        return props.code
    }

    if( typeof props.code === 'object' ) {
        return JSON.stringify( props.code, null, 4 )
    }

    return "Code should be a string or object."

} )

watchEffect( () => {
    
    if( !code.value || !codeBlock.value ) {
        return
    }

    nextTick( () => {
        /**
            Highlightjs gets cranky and won't re-highlight if you don't  remove this attr.
        */
        codeBlock.value.removeAttribute('data-highlighted')
        hljs.highlightElement( codeBlock.value )
    } )

} )

</script>
<style scoped lang='scss'>
    .pockets-ux-code-block {
        --color: var(--bs-white);
        color: var(--color);
        margin: 0;
        code {
            padding:20px;
            text-wrap: wrap;
            line-height: 24px;
            color: inherit;
            width: 100%;
        }
    }
</style>