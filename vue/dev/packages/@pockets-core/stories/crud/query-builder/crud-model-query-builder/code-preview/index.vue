<template lang='pug'>
div(class='grid columns-1 gap-1')
    label(class='fw-8 fs-20 text-uppercase text-primary-lt') {{type}}
    div( v-if='helperText' v-html="helperText" class='fw-6 fs-16 gap-1 columns-1 grid')
    pockets-ux-code-block( :code='code' v-if='modelValueAsJson' class='fs-20')
</template>
<script setup>
import { computed } from "vue"
import { context } from "../context"
let props = defineProps( {
    type: {}
} )

let { modelValue, modelValueAsJson } = context.inject.editor()

let restCode = () => {

    return [
        'import axios from "axios"',
        "",
        `axios.post( "/wp-json/pockets/crud", [ ${modelValueAsJson.value} ] ).then( e => console.log( e.data ) )`,
    ].join('\r\n')

}

let phpCode = () => {
        
    let {
        action,
        input,
        output,
        init,
        model
    } = modelValue.value

    let $input = input ? "$query['input']" : ""
    let $output = output ? ", $query['output']" : ""
    let $init = init ? "$query['init']" : ""

    return [
        `$query = json_decode('${modelValueAsJson.value}', true );`,
        "",
        `$result = \\pockets::crud( $query['model'] )::init( ${$init} )->${action}( ${$input}${$output} );`,
        'var_dump( "<pre>", $result, "</pre>" );'
    ].join('\r\n')

}

let pocketsCode = () => {
        
    let {
        action,
        input,
        output,
        init,
        model
    } = modelValue.value

    let $input = input ? "query.input" : ""
    let $output = output ? ", query.output" : ""
    let $init = init ? "query.init" : null

    return [
        `let query = ${modelValueAsJson.value}`,
        "",
        `$pockets.crud( query.model ).init( ${$init} ).${action}( ${$input}${$output} ).then( data => console.log( data ) )`,
    ].join('\r\n')

}

let helperText = computed(() => {
    return {
        rest: "<p>Server side, pockets handles requests as an array, allowing for multiple requests to be sent at once. So in this case, you must pass the query in an array.</p><p class='alert alert-danger fw-8'>Remember that you must pass you must pass 'X-WP-Nonce' with a valid nonce as part of the headers to run as an authorized user.</p>",
        php: "<p>Run server side.</p>",
        pockets: "<p>Directly returns the queries result, or a server error if one occurs.</p>"
    }[props.type]
})

let code = computed(() => {
    return {
        rest: restCode,
        php: phpCode,
        pockets: pocketsCode
    }[ props.type ]()
})

</script>
<style scoped lang="scss">
:deep(){
    p {
        margin: 0 
    }
}
</style>