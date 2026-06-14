import { reactive, computed, ref } from "vue"
import { createValidator } from "./create-validator"
import { useStorage, useClipboard  } from '@vueuse/core'
import { $pockets } from "@pockets-core"

let { copy } = useClipboard(  { legacy: true } )

export let useEditor = props => {

    let editorKey = ref( Date.now() )

    let validator = createValidator( props )

    let initializeJson = () => ({
        action: "read",
        model: ""
    })

    let modelValue = useStorage ('pockets-crud-query', initializeJson() )
    let modelValueAsJson = computed( () => JSON.stringify( modelValue.value, null, 4 ) )

    let isValid = ref(true)

    let editorProps = computed( () => {

      return {
        validator,
        onRenderMenu: menuItems => {
            return menuItems.filter(e => {
                if (
                    [ 'separator', 'space' ]
                        .includes(e.type)
                    ||
                    [ 'table', 'tree', 'text' ]
                        .includes(e.text ?? "")
                    ||
                    [ 'jse-transform', 'jse-sort', 'jse-contextmenu', 'jse-search', "jse-space" ]
                        .includes(e.className ?? "")
                ) return false
                return true
            } ).concat( [
                {
                    title: "Reset Query to initial settings",
                    onClick: () => {
                        modelValue.value = initializeJson()
                        editorKey.value = Date.now()
                    },
                    text: "Reset"
                },
                {
                    title: "Copy to clipboard.",
                    onClick: () => {
                        copy( modelValueAsJson.value )
                        $pockets.toast.success("Copied")
                    },
                    text: "Copy"
                },
            ] )
        },
      } 
      
    } )
    
    return {
        editorProps,
        modelValue,
        modelValueAsJson,
        hasJSON(v){
            isValid.value = v === false ? false : true
        },
        isValid,
        editorKey
    }

}