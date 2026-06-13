<template>
    <render v-bind="props" />
</template>
<script lang='ts' setup>
import { compile, h } from "vue"

type props = {
    /**
        HTML Element to wrap compiled template in. 
        If set to false, it will not be wrapped.  
    */
    el?: string | boolean
    /**
        Template content to use for rendering
    */
    innerHTML?: string
    /**
        Template data to use for rendering
    */
    state?: object | null
}

let props = withDefaults( defineProps<props>(), {
    el: "div",
    innerHTML: "",
    state: null
} )

let render = (props) => {
    try {
        let compiled = h( compile(props.innerHTML), props.state )
        return props.el ? h( props.el, compiled ) : compiled
    } catch( e ) {
        console.error( e )
        return h( 'div', {
            class: "alert alert-danger",
            innerHTML: "Error rendering. View console for more info."
        } )
    }
}

</script>