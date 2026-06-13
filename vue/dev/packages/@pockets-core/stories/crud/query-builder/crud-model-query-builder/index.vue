<template lang='pug'>
div(class='crud-model-query-builder')
    div(class='grid-info-md gap-2 align-items-start')
        div(class='bg-grey-800 side-bar')
            div(class='grid columns-1 gap-1 p-2')
                label( class='fw-8 fs-20' ) Query
                button( 
                    class='btn btn-grey-700 p-1 rounded-0'
                    :class='{active: tab=="edit" }'
                    @click='tab="edit"'
                ) Edit Query
                button( 
                    class='btn btn-grey-700 p-1 rounded-0'
                    :class='{ active: tab=="run" }'
                    @click='tab="run"'
                    :disabled='!isValid'
                ) View result
                button( 
                    class='btn btn-confirm text-white p-1 rounded-0'
                    @click='[query.run(), tab="run"]'
                    :disabled='!isValid'
                ) Run Query
                label(class='fw-8 fs-20') Code
                button( 
                    class='btn btn-grey-700 p-1 rounded-0'
                    :class='{active: tab=="php" }'
                    @click='tab="php"'
                    :disabled='!isValid'
                ) PHP
                button( 
                    class='btn btn-grey-700 p-1 rounded-0'
                    :class='{active: tab=="pockets" }'
                    @click='tab="pockets"'
                    :disabled='!isValid'
                ) Pockets
                button( 
                    class='btn btn-grey-700 p-1 rounded-0'
                    :class='{active: tab=="rest" }'
                    @click='tab="rest"'
                    :disabled='!isValid'
                ) Rest
        div(class='position-relative')
            KeepAlive()
                component( :is='component.is' v-bind="component.props" :key='tab')

</template>
<script setup lang='ts'>
import queryResult from "./query-result/index.vue"
import codePreview from "./code-preview/index.vue"
import jsonEditor from "./json-editor/index.vue"
import { ref, computed } from "vue"
import type { props as editorProps } from './types'

import { useEditor } from "./use-editor"
import { useRunQuery } from "./use-run-query"
import { context } from "./context"

interface $props {
    schemas: object
    ajvOptions?: editorProps['ajvOptions']
}
let props = withDefaults( defineProps<$props>(), {
    schemas: {},
    ajvOptions: {
        allowUnionTypes: true,
        allowMatchingProperties: true,
        allErrors: true,
        verbose: true,
        $data: true,
        strict: false
    } 
} )

let editorInstance = useEditor( props, {} )
let { editorProps, modelValueAsJson, modelValue, isValid } = editorInstance
let query = useRunQuery( modelValue )

context.provide.editor( editorInstance )
context.provide.query( query )

let tab = ref('edit')

let component = computed( () => {
    let map = {
        edit: {
            is: jsonEditor,
        },
        run: {
            is: queryResult,
        },
        php: {
            is: codePreview,
            props: {
                type: "php"
            },
        },
        rest: {
            is: codePreview,
            props: {
                type: "rest"
            },
        },
        pockets: {
            is: codePreview,
            props: {
                type: "pockets"
            },
        }
    }
    return map[tab.value] ?? map['edit']
})
</script>
<style lang='scss' scoped>
.crud-model-query-builder:deep() {

    .grid-info-md {
        grid-template-columns: 280px 1fr;
        display: grid;
    }
    
    button {
        font-size: 1.2rem
    }

    .side-bar {
        z-index: 1;
        top: 20px;
        position: sticky
    }
    p {
        &:last-of-type {
            margin: 0
        }
    }

}


</style>