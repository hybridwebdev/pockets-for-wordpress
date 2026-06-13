<template lang='pug'>
pre(
    :code-value="value"
    lang='php'
) {{ props.attribute.value}} {{ value }}
</template>
<script setup>
import { useApi } from "../use-api"

let api = useApi()

let props = defineProps({
    attribute: {
        
    },
    item: {}
})
let crud = {
    model: api.document.properties.model_name.value,
    input: JSON.stringify(props.attribute.input).replaceAll('{', '[').replaceAll('}', ']').split(":").join('=>'),
    init: '[]',
    // input: props.attribute.input
}
let value = `\pockets::crud("${crud.model}")::init(${crud.init})->read(["${props.item.name}" => ${crud.input}])`
</script>