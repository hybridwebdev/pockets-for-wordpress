<template lang="pug">
pockets-popper(
    :triggers="['click']"
    theme='generic-popper'
    :auto-hide='true'
    no-auto-focus
    placement='top'
)
    button(
        class="btn btn-accent-dk p-1 col-12 text-white"
        v-tooltip='"Edit element class"'
    ) 
        i(class='fa fa-cogs')
    template( 
        #popper
    )   
        div(class='p-1 bg-accent-dk border border-5 border-accent-lt')
            label( class='grid-info-sm text-white grid columns-1 gap-1' 
                
            )
                | Class
                input( 
                    v-model='editor.$editorApi.selection.node.props.class' 
                    class='form-control rounded-0 p-1'
                )
            label( class='grid-info-sm text-white grid columns-1 gap-1' 
                
            )
</template>
<script lang='ts' setup>
import { injectEditor } from "@pockets-tip-tap"
let editor = injectEditor()

</script>