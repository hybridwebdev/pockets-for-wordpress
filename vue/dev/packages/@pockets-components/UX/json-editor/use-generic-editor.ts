import { computed, ref } from 'vue';
import { useClipboard } from '@vueuse/core'
import { $pockets } from "@pockets-core"

export let useGenericEditor = () => {

    const { copy  } = useClipboard(  { legacy: true } )

    let initState = () => ({
        props: {
            test: "hello world"
        }
    })

    let text = ref<string>(JSON.stringify(
        initState(),
        null,
        4
    ))

    let json = computed( () => {
        try {
            return JSON.parse( text.value )
        } catch(e) {
            return false
        }
    } )

    let editorProps = computed( () => {

        return {
          
            content: { text: text.value },
           
            onChange: content => text.value = content.text,
            onRenderMenu: menuItems => {
                return menuItems.filter(e => {

                    if (
                        [ 'separator', 'space' ]
                            .includes(e.type)
                        ||
                        [ 'table', 'tree', 'text' ]
                            .includes(e.text ?? "")
                        ||
                        [ 
                            'jse-transform', 
                            'jse-sort', 
                            'jse-contextmenu', 
                            'jse-search', 
                            "jse-space" 
                        ]
                            .includes(e.className ?? "")
                    ) return false

                    return true

                } ).concat( [

                    {
                        type: 'separator',
                    },
                    {
                        title: "Copy",
                        onClick: () => {
                            copy( text.value )
                            $pockets.toast.success("Copied to clipboard")
                        },
                        text: "Copy",
                        disabled: !json.value
                    },
                ] )
                
            },

        } 
        
    } )

    return {
        editorProps, 
        json
    }
}