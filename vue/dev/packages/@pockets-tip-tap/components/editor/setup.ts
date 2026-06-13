import { ref, computed, toRef, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { useCreateEditorInstance } from "@pockets-tip-tap"

export let setup = (props, { emit }) => {

  const modelValue = ref(props.modelValue)

  watch( () => props.modelValue, (newVal) => {
      modelValue.value = newVal
  } )

  const emitUpdate = (val: string) => emit('update:modelValue', val)

  const updateFn = props.updateDelay === 0
    ? emitUpdate
    : useDebounceFn(emitUpdate, props.updateDelay)

  watch(modelValue, updateFn)

  const editor = useCreateEditorInstance(
    modelValue,
    toRef(props, 'editorConfig')
  )

  return {
    editor,
    modelValue
  }

}
