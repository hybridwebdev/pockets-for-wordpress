/**
    Importing directly from namespace to avoid conflict where other libraries using lodash may
    override the global instance.
    see https://github.com/WordPress/gutenberg/issues/6399
*/
import get from "lodash/get" 
import set from "lodash/set" 

export let clone = (o: object) => JSON.parse( JSON.stringify( o ) )
export let $delete = (obj, path) => path.split('.').reduce((acc, key, index, array) => (index === array.length - 1) ? delete acc[key] : acc[key], obj)
export let $object = {
    get, 
    set, 
    clone, 
    $delete
}