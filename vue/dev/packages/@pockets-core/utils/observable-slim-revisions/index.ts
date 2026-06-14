import ObservableSlim from "@pockets-core/utils/observable-slim"
import { reactive, computed } from "vue"
import { $object } from "@pockets-core/utils"
import type { direction, revision, revisions, observable, applyRevisionsState, filters } from "./types"

let { get:$get, set: $set, $delete, clone: $clone } = $object

/**
    useRevisions should only be invoked once per proxy.
    Invoking it multiple times will apply multiple observers
    to the same proxy.
*/
export let useRevisions = ( 
    observable: observable, 
    filters:filters = {
        beforeTracker: ( revisions: revisions ) => revisions,
        afterRevisions: ( state: applyRevisionsState ) => {},
        beforeRevisions: ( state: applyRevisionsState ) => {}
    }
) => {
    
    let applyRevision = ( revision: revision, direction: direction ) => {

        let { type, currentPath:$path, property, proxy } = revision
        
        let proxyPath = $path.split('.').slice(0, -1).join('.')

        let dataType = Array.isArray( proxy ) ? "array" : "object"

        let actions = {
            delete: {
                undo: () => actions.update.undo(),
                redo: () => actions.add.undo()
            },
            add: {
                undo: () => {
                    if( dataType == 'object' ) {
                        $delete( observable, $path )
                    }
                    if( dataType == 'array' && property!='length' ) {
                        let arr = $get( observable, proxyPath)
                        arr.splice(property, 1)
                    }
                },
                redo: () => actions.update.redo()
            },
            update: {
                undo: () => {
                    $set( observable, $path, $clone( revision.previousValue ) )
                },
                redo: () => {
                    $set( observable, $path, $clone( revision.newValue ) )
                } 
            }
        }
        
        return actions[ type ][ direction ]()

    }

    let applyRevisions = ( direction: direction ) => {

        let index;

        if( direction == 'undo' ) {
            index = state.index--
        }
        
        if( direction == 'redo' ) {
            index = ++state.index
        }

        let revisions: revisions = state.history[ index ]
        
        let $revisions = revisions.slice()
        
        if( direction == 'undo' ) {
            $revisions.reverse()
        }

        filters.beforeRevisions( { $revisions, direction, revisions } )

        ObservableSlim.pause( observable )
            $revisions.map( ( revision: revision ) => applyRevision( revision, direction ) )
        ObservableSlim.resume( observable )

        filters.afterRevisions( { $revisions, direction, revisions } )

    }

    let tracker = ( revisions: revisions ) => {

        /** 
            Ignore changes made while observable was paused.
        */
        
        revisions = revisions.filter( ( revision: revision ) => !revision.observablePaused )

        /**
            If a change occurs and the history isn't at the latest revision, then
            delete any history after the current point and set the most current revision
            point to be the current one. 
        */
                                       
        if( state.history.length >= 1 && state.history.length > state.index ) {
            state.history.splice( state.index + 1)
        }
        
        state.history.push( filters.beforeTracker( revisions ) )

        state.index++

    }

    let undo = () => {

        if ( !state.canUndo ) { 
            return console.log("cant undo")
        }

        applyRevisions('undo')
    
    }

    let redo = () => {
        
        if ( !state.canRedo ) { 
            return console.log("cant redo")
        }

        applyRevisions('redo')
    
    }

    let state = reactive( {
        index: -1,
        history: [],
        canUndo: computed( () => state.index >= 0 ),
        canRedo: computed( () => state.index < state.history.length -1 ),
        undo,
        redo,
    } )

    ObservableSlim.observe( observable, tracker )
  
    return state

}