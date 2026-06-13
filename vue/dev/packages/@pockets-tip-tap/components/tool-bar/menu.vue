<template lang='pug'>
teleport(
    to='body'
)
  selection-highlighter()
  floating-menu()
    element-selector()
    attributes()
    link-selector()
    format-buttons() 
    fonts()
    colors()
</template>
<script lang='ts' setup>
import elementSelector from "./element-selector.vue"
import selectionHighlighter from "./selection-highlighter.vue"
import formatButtons from "./format-buttons.vue"
import colors from "./colors.vue"
import fonts from "./fonts/index.vue"
import attributes from "./attributes.vue"
import floatingMenu from "./floating-menu/index.vue"
import linkSelector from "./link.vue"


</script>
