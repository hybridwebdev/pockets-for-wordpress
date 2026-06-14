<template lang='pug'>
select(
    v-model='vModel'
)
    option(
        v-for='option in options'
        :value='option.value'
        ) {{ option.text }}
</template>
<script lang='ts'>

import { useVModel } from '@vueuse/core'

let setup = ( props, { emit } ) => {
    return {
        vModel: useVModel(props, 'modelValue', emit ),
    }
}

export default {
    setup,
    props: {
        modelValue: {
            // type any
        },
        options: {
            type: Array,
            default: []
        }
    },
}
</script>