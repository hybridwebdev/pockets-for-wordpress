<template>
<iframe
    :srcdoc="html"
    @load="load"
    class="col-12 border border-5 border-grey-md bg-black m-0 p-1"
/>
</template>
<script setup lang="ts">
/**
    This component is a way to sideload the css from pockets
    into an iframe that can then display HTML passed in. 
*/

import { context  } from "@pockets-documentation"

let documentationConfig = context.inject.documentationConfig()


defineProps< { 
    html: string
} >()

let load = function(el){

    const iframeDocument = el.target.contentDocument
    
    const link = iframeDocument.createElement('link')
    link.rel = 'stylesheet'
    link.href = documentationConfig.assets.css

    iframeDocument.head.appendChild(link)

    iframeDocument.documentElement.classList.add('pockets-bootstrap')
    iframeDocument.body.classList.add('bg-transparent')

}
</script>
<style lang="scss" scoped>
iframe {
    min-height: 100vh
}
</style>