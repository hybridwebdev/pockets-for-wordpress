<template>
    <div 
        class="d-grid pockets-ux-code-editor"
        @mouseenter="showCopy = true"
        @mouseleave="showCopy = false"
    >
        <CodeEditor 
            v-bind="{...props, ...$attrs}" 
            style="grid-area: 1/1"
            v-model="code"
        />
        <button
            style="grid-area: 1/1; z-index: 1; align-self:start; justify-self:end"
            class="btn btn-accent-dk pockets-ux-code-editor-copy-button"
            type="button"
            v-if="copyEnabled && showCopy"
            @click="() => copy(code)"
            
        >
            {{ copied ? "Copied" : "Copy" }}
        </button>
    </div>
</template>
<script setup lang="ts">
import CodeEditor from 'simple-code-editor'
import { ref } from "vue"
import { useClipboard } from '@vueuse/core'
const { copy, copied } = useClipboard({ legacy: true })

let code = defineModel( 'modelValue', { default: "" } )

interface $props {
    width?: string
    borderRadius?: string
    lineNums?: boolean
    wrap?: boolean
    theme?: string
    tabSpaces?: number
    displayLanguage?: boolean
    header?: boolean
    maxWidth?: string
    copyEnabled?: boolean
}

let props = withDefaults( defineProps< $props >(), {
    width: '100%',
    borderRadius: "0px",
    lineNums: false,
    theme: "stackoverflow-dark",
    tabSpaces: 4,
    displayLanguage: false,
    maxWidth: "100%",
    header: false,
    copyEnabled: true
} )

defineOptions({
    inheritAttrs: false
})

const showCopy = ref(false)

</script>
<style lang="scss">
.pockets-ux-code-editor {
    .header {
        padding: 20px 0;
        height: auto;
        border: 0 !important;
        margin-bottom: 20px;
        background: var(--bs-grey-700);
        .copy-code {
            color: #fff;
            width: auto;
        }
    }
    code,
    textarea,
    pre {
        text-wrap: wrap !important;
        word-wrap: break-word !important;
        word-break: break-all !important;
    }
}
</style>