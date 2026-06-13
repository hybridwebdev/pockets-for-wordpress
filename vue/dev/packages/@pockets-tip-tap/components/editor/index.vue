<template lang='pug'>
editor-content( 
  :editor="editor" 
  class='editor-wrapper'
  v-bind='$attrs'
  @click='editor.$editorApi.focused = true'
)
toolBar()
input( 
  v-if='name' 
  type='hidden' 
  :value='modelValue' 
  :name='name' 
)
</template>
<script lang='ts' setup>
import { EditorContent } from '@tiptap/vue-3'
import toolBar from "@pockets-tip-tap/components/tool-bar/menu.vue"
import { setup } from "./setup"

interface $props {
  /**
    HTML to edit.
  */
  modelValue: string
  editorConfig?: {
    /**
      If false, editor will be disabled.
    */
    editable: boolean 
  }
  /**
    How long in ms to delay updating state when changes are made. Set to 0 to disable debounce.
  */
  updateDelay?: number

  /**
    If name is a string, it will add a hidden input field with name as its name. Useful
    for when you wish for the editor content to show up as a form field in forms.
  */
  name?: false | string
}

let props = withDefaults( defineProps< $props >(), {
  updateDelay: 1000,
  editorConfig: () => ( {
    editable: true
  } ),
  name: false,
} )

let emit = defineEmits( [ 
  
  /**
    Emits editor contents when change occurs. THis is set to a debounce based on the 
    updateDelay property. 
  */
  'update:modelValue' 
  
] )

let { editor, modelValue } = setup( props, { emit } )

</script>
<style lang='scss'>
.editor-wrapper {
  .ProseMirror-trailingBreak {
    //display: none !important;
  }
  .ProseMirror {
    outline: none;
    white-space: pre-wrap;
    ::selection {
    }
    p.is-empty::before {
      color: #adb5bd;
      content: attr(data-placeholder);
      height: 0;
      pointer-events: none;
      float:left;
    }
  }
  .has-focus {
    outline: 2px solid #000;
  }
}

</style>