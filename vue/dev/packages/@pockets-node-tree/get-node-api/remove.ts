import type { remove, TreeNodeApi } from "@pockets-node-tree"

export let useRemove = (api:TreeNodeApi) : remove => {
   
    let child = (index: number) => {
        if(api.node.nodes) {
            api.node.nodes.splice(index, 1)
        }
        return false
    }

    let self = () => {
        if(!api.parent || !api.parent.remove.child) return false;
        api.parent.remove.child(api.paths.index)
        return false
    }

    let remove:remove = {
        self,
        child
    }

    if(
        !api.parent
        ||
        api.parent.schema['can-remove-nodes'] === false 
    ) {
        remove.self = false
    }

    if(
        !api.node.nodes
        ||
        api.schema['can-remove-nodes'] === false 
    ) {
        remove.child = false
    }
    
    return remove
}