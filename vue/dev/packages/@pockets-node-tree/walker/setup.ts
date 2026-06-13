// @ts-nocheck
import { useCurrentElement } from '@vueuse/core'
import { computed, reactive, provide, ref, watch, onMounted, onUnmounted, } from "vue"

import { editor, getNodeApi } from "@pockets-node-tree"
import { injectionKey as nodeApiInjectionKey } from "./injection-key"

export let setup = (props) => {
        
    let nodeApi = getNodeApi( props.treeNode )

    let nodeRef = ref()

    let hovered = ref( false )

    /**
        Get the actual underlying element. 
        This is neccessary as it could be either a native html element
        or a component instance.
    */
    let nodeEl = useCurrentElement( nodeRef )

    /**
        Stuff and thangs
    */
    
    let clickHandler = e => {
        
        let blackListedEls = [
            'a',
            'button',
            'iframe',
            'input',
            'select'
        ];

        if( editor.show ) {
            if ( 
                e?.target 
                &&  
                (
                    blackListedEls.includes( e.target.tagName.toLowerCase() )
                    ||
                    e.target.closest( blackListedEls.join(', ') ) 
                    
                )         
            ) {
                e.preventDefault()
            }
        }

        if( 
            !editor.show 
            ||
            childOfselected.value
        )  {
            return
        }
        editor.active = nodeApi 
    }

    let isTreeLoader = computed( () => props.treeNode.el == "pockets-tree-root-loader" )

    let selected = computed( () =>  editor.selectedNodes.filter(e => e.paths.path == nodeApi.paths.path ).length > 0 )
    
    let childOfselected = computed( () => editor.selectedNodes.filter(e => {
        if( 
            nodeApi.paths.path.length == e.paths.path.length
        ) {
            return
        }
        return nodeApi.paths.path.includes(e.paths.path)
    } ).length > 0 )
    
    let active = computed( () => {
        if( 
            !editor?.active 
            ||
            selected.value
        ) {
            return
        }
        if( editor?.active?.paths.path === nodeApi.paths.path ) return true
    } )

    let classes = computed( () => {

        if( !show.value ) {
            return
        }

        let getClass = () => {
            if( active.value ) {
                return "active"
            }
            if( selected.value) {
                return "selected"
            }
            if( hovered.value ) {
                return "hovered"  
            }
            if( showAll.value ) {
                return "show-all"
            }
        }
        
        let $class = getClass()
        
        $class = $class ? `pockets-node-tree-node-facade-${$class}` : ''

        return {
            [ $class ]: true
        }

    } )

    let showAll = computed( () => editor.options.nodeFacades.show == 'all' && editor.show )
    
    let show = computed( () => {
        if( 
            !editor.show 
            || 
            childOfselected.value
        ) {
            return
        }
        return active.value || selected.value || hovered.value || showAll.value
    } )
    
    provide( nodeApiInjectionKey, nodeApi )

    let scrollIntoView = (path: string) => {
        if(nodeApi.paths.path == path && nodeEl.value ) {
            nodeEl.value.scrollIntoView()
        }
    }

    let triggerHovered = ( path: string, state: boolean ) => {
        if(nodeApi.paths.path == path) {
            hovered.value = state
        }
    }

    let events = {
        attach: () => {
            $pockets.event.on( `pockets-node-tree/node-facade/scrollIntoView`, scrollIntoView )
            $pockets.event.on( `pockets-node-tree/node-facade/hovered`, triggerHovered )
        },
        removed: () => {
            $pockets.event.off( `pockets-node-tree/node-facade/scrollIntoView`, scrollIntoView )
            $pockets.event.off( `pockets-node-tree/node-facade/hovered`, triggerHovered )
        }
    }

    onMounted( events.attach )
    onUnmounted( events.removed )

    let tooltip = computed(() => {
       
        let $class = Object.keys( classes.value ?? {} )
        
        /**
            Because v-tooltip craps itself if there's too many instances, only show relevant ones.
        */
        if( active.value || selected.value || hovered.value ) {
            return { 
                content: nodeApi.branch.map( e => e.schema.title ).join( ' > '),
                shown: editor.show && show.value,
                triggers: [],
                autoHide: false,
                hideTriggers: [],
                placement: "top-start",
                popperClass: `${$class} pockets-node-tree-node-facade-tooltip`,
                delay: 0
            }
        }

        return {}
    } )
    
    let facade = reactive( { 
        classes,
        clickHandler,
        active,
        hovered
    } )

    return {
        nodeApi,
        nodeRef,
        facade, 
        isTreeLoader,
        nodeEl,
        tooltip,
        hoverIntent: {  
            options: {
                interval: 20
            },
            change: ( value: boolean ) => {
                if( childOfselected.value ) {
                    return
                }
                $pockets.event.emit( `pockets-node-tree/node-facade/hovered`, nodeApi.paths.path, value )
            }
        },
    }
    
}
