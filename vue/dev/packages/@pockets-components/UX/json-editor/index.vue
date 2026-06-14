<template>
  <div ref="editorRef" class='json-editor' v-bind="$attrs"/>
</template>
<script setup lang="ts">
/**
  abuses useAttrs to automatically accept and forward all props to editor
*/
import { onMounted, onUnmounted, ref, onUpdated, useAttrs } from "vue"

import { JSONEditor } from "vanilla-jsoneditor"

defineOptions( {
  inheritAttrs: false,
} )

let props = useAttrs()

let editorRef = ref() 
let editorInstance = ref()

onMounted( () => editorInstance.value = new JSONEditor( {
  target: editorRef.value,
  props,
} ) )

onUnmounted( () => editorInstance.value.destroy() ) 

onUpdated( () => editorInstance.value.updateProps( props ) )

</script>
<style lang='scss' scoped>

@import 'vanilla-jsoneditor/themes/jse-theme-dark.css';

.json-editor:deep() {

  --jse-message-warning-background: transparent !important;
  --jse-theme-color: var(--bs-accent-dk) !important;
  --jse-indent-size: 20px;
  --jse-line-height: 24px;
  --jse-font-size-mono: 18px;
  --jse-menu-button-size: auto;
  --jse-padding: 40px;

  .jse-button {
    --jse-padding: 30px;
  }
  .cm-gutterElement {
    [title='Unfold line'],
    [title="Fold line"] {
      font-size:30px;
      color: var(--bs-accent-md);
      display: block;
      &[title="Fold line"] {
        margin-top:-10px;
      }
    }
  }
  .jse-text-mode {
    flex-direction: row !important;
    flex-wrap: wrap !important;
    align-items: start;
  }
  .jse-main {

  }
  .jse-menu { 
    order: 10;
    width: 100%;
    position: sticky !important;
    top: 0;
    z-index: 1;
  }
  .jse-contents {
    order: 20;
    
  }
  .jse-status-bar {
    order: 30;
    width: 100%;
  }

  .jse-message, 
  .jse-validation-errors-overview {
    width:40%;
    order: 21;
    position: sticky;
    top: 40px;
    padding: 10px 0 0 0 !important;
    max-height: 80vh !important;
    color: #fff !important;
    word-break: break-word;
    font-size: 18px !important;
    line-height: 28px;
    border: 2px solid var(--bs-accent-dk);
    &.jse-message { 
      padding: 10px !important;
      align-items: start !important;
      height: auto !important;
      gap: 0px !important;
      .jse-actions {
        margin-top: 10px;
        width: 100%;
      }
    }
    > table {
      tr td {
        padding: 0px !important
      }
      &:before {
        content: "Invalid Data!";
        padding: 10px;
        margin-bottom: 10px;
        font-weight:800;
        font-size: 18px;
      }
      .jse-validation-error {
     
        display: grid;
        gap: 10px;
        border-top: 2px solid var(--bs-accent-dk);
        padding: 10px;
        &:first-of-type {
          margin-top: 10px;
        }
        .jse-validation-error-path {
          font-weight: 800;
        }
        .jse-validation-error-icon  {
            display: none;
        }
      }
    }
  }

  .jse-validation-errors-expand,
  .jse-validation-errors-collapse {
    position: absolute !important;
    top: 0px !important;
    right: 0;
    padding: 10px !important;
    background: var(--bs-accent-md) !important;
    width: auto !important;
    height: auto !important;
    display:flex !important;
    align-items:center;
    justify-content: center;
    svg {
      height: 15px !important;
      width: 15px !important;
      transform: rotate(180deg);
    }
    &.jse-validation-errors-expand {
      svg {
        transform: rotate(90deg);
      }
    }
  }
}
</style>