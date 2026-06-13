
import { $pockets } from "@pockets-core"
 
import { useTrees } from "./use-trees"

export let trees = useTrees( $pockets?.data?.nodeTreeEditor?.templates )

export let getTree = source => trees.templates[ JSON.stringify( source) ] ?? false

export let setTree = ( source, root ) => trees.templates[ JSON.stringify( source ) ] = root