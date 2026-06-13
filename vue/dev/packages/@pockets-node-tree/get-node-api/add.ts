import { $pockets } from "@pockets-core"
import type { add, TreeNode, TreeNodeApi } from "@pockets-node-tree"

export let useAdd = (api: TreeNodeApi) : add => {

    let inside = (node: TreeNode, index: number = 0) => {
        if(api.node.nodes){
            api.node.nodes.splice( index, 0, node )
            return api.node.nodes[index]
        }
        return false
    }

    let after = (node: TreeNode) => {
        if(!api.parent || !api.parent.add.inside) return false;
        return api.parent.add.inside(node, api.paths.index + 1)
    }

    let before = (node: TreeNode) => {
        if(!api.parent || !api.parent.add.inside) return false;
        return api.parent.add.inside(node, api.paths.index)
    }

    let add:add = {
        inside,
        before,
        after
    }

    if(
        !api.parent
        ||
        api.parent.schema['can-add-nodes'] === false 
    ) {
        Object.assign(add, { before: false, after: false } )
    }

    if(
        !api.hasNodes 
        ||
        api.schema['can-add-nodes'] === false 
    ) {
        add.inside = false
    }

    return add

}