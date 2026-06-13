<template lang="pug">
pockets-popper(
    :triggers="['click']"
    theme='generic-popper'
    :auto-hide='true'
    @apply-show='() => nextTick( () => $refs.$linkInput.focus() )'
    :delay='0'
    no-auto-focus
    v-if='show'
    :handle-resize='true'
    placement='auto'
)
    button(
        class="fa-solid fa-link text-white btn btn-accent-dk p-1 col-12"
        v-tooltip='"Edit Link"'
    )
    template( #popper)
        div(
            class='grid columns-1 gap-1 bg-accent-dk border border-5 border-accent-lt p-1 '
        )
            label(
                class='grid-info-sm'
            ) 
                span(class='text-white d-flex align-items-center') Link
                div(
                    class='d-flex gap-1'
                )
                    div(class='flex-grow-1')
                        input(
                            v-model='link.href'
                            class='form-control p-1 rounded-0'
                            ref='$linkInput'
                            placeholder="Enter link"
                        )
                    button(
                        class='btn btn-danger fa fa-times text-white rounded-0 p-1'
                        v-tooltip='"Clear link"'
                        @click='link.href = null'
                    ) 
            label(
                class='grid-info-sm'
                v-if='link.href'
            ) 
                span(class='text-white d-flex align-items-center') Rel
                div(class='flex-grow-1')
                    input(
                        v-model='link.rel'
                        class='form-control p-1 rounded-0'
                        placeholder="Enter rel"
                    )
            label(
                v-if='link.href'
                class='grid-info-sm align-items-center'
            ) 
                
                input(
                    v-model='link.target'
                    true-value="_blank"
                    :false-value="null"
                    type='checkbox'
                    class='form-check-input p-1'
                )

                span(class='text-white d-flex align-items-center') Open in new window
</template>
<script setup lang="ts">
// @ts-nocheck
import { nextTick, computed} from "vue"
import { injectEditor } from '@pockets-tip-tap'

let editor = injectEditor()

let show = computed( () => editor.$editorApi.hasField('link') && editor.$editorApi.hasTextSelection)
/**
    Proxy is the only option because using vues reactive system just won't work
*/
let link = new Proxy( {}, {
    set: (_, key: string, value: string) => {

        let $link = editor.getAttributes('link')
        
        $link[key] = value === "" ? null : value

        if ( $link.href === null ) {
            editor.chain().extendMarkRange('link').unsetLink().run()
            return true
        }

        editor.chain().extendMarkRange('link').setLink( $link ).run() 

        return true
    },
    get: (target, key: any) => editor.getAttributes('link')[key],
} )

</script>
<style scoped lang="scss">
.grid-info-sm {
    grid-template-columns: 60px 1fr;
    display: grid;
    align-items:center;
    gap: 10px
}
</style>