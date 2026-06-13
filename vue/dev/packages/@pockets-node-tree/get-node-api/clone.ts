import type { clone, TreeNodeApi } from "@pockets-node-tree"
import { $object } from "@pockets-core/utils"

export let useClone = (api:TreeNodeApi) : clone => {
    
    let self = () => {
        if(!api.parent || !api.parent.clone.child) return false;
        return api.parent.clone.child(api.paths.index)
    }
    
    let child = (index: number) => {
        if(!api.add.inside) return false;
        let child = api.getChild(index)
        if(child.node) {
            let targetIndex = index+1
            api.add.inside( $object.clone( child.node ), targetIndex )
            if(api.node.nodes) {
                return api.node.nodes[targetIndex]  
            }
        }
        return false
    }
    
    let clone: clone = {
        self,
        child
    }

    if(
        !api.hasNodes
        ||
        (
            api.parent 
            &&
            api.parent.schema['can-clone-nodes'] === false 
        )
    ){
        clone.child = false
    }
    
    if(
        !api.parent
        ||
        (
            api.parent 
            &&
            api.parent.schema['can-clone-nodes'] === false 
        )
    ) {
        clone.self = false
    }

    return clone
}
