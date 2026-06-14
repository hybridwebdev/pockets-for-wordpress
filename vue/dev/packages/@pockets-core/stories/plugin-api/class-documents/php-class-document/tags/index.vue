<template lang='pug'>
div(
    class='grid-info-sm'
    v-if='tags'
)
    span( class='fw-8 py-1 text-primary-lt') Additional information
    div(
        class='grid gap-2 columns-1'
    )
        div( 
            class='bg-grey-600 p-2'
            v-for='(tag, k) in tags'  
        ) 
            component(   
                :is='renderTags[k]' 
                :tag='tag' 
                :section='documentSection'
            )  

</template> 
<script lang='ts' setup>
import { computed, h, compile } from "vue"
import { useApi } from "../use-api"
import documentLink from "../document-link/index.vue"
let api = useApi() 

let props = defineProps({
    documentSection: {
        type: Object,
    }
})

/**
    renderTags is a map that correlates a tags key to a component. The component 
    receives a tag and section property, with tag being the tag being parsed,
    and section being the current document section, eg a property or method. 
*/
let renderTags = {

    /**
        @class-document-html
        Takes tag value and renders it as html
    */
    'class-document-html': props => h( { template: props.tag, components: renderTags } ),
    
    /**
        @class-document-link
        Takes tag value and navigates document to its value.
    */
    'class-document-link': ( props, { slots } ) => props.link
        ? h('a', {
            role: "button",
            class: "class-document-link",
            onClick: () => api.documentLink(props.link)
        }, slots.default() )
        : h(documentLink, props, slots),
    
    /**
        @class-document-link-property-value
        Used to link a properties value via class-document-link.
        eg public $my_property = 'some\class\name' would navigate to the properties value. 
    */
    'class-document-link-property-value': props => h( documentLink, { tag: props.section.value } ),
    
    /**
        @class-document-link-method-return
        Used to link a methods return type via class-document-link.
        eg public my_metthod return 'some\class\name' would navigate to the return type. 
    */
    'class-document-link-method-return': props => h( documentLink, { tag: props.section.return } ),

}

let tags = computed( () => {

    let { documentSection: section } = props

    if( typeof section.tags !='object' ) return false;

    let tags = Object.fromEntries(
        Object.entries(section.tags)
        .filter(({0: k, 1: v}) => {
            if(renderTags[k]) return true
            return false
        } )
    )

    if( Object.entries(tags).length == 0 ) return false;

    return tags

})



</script>
