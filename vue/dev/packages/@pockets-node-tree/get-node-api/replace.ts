import { TreeNodeApi, replace, TreeNode } from "@pockets-node-tree";
import { $object } from "@pockets-core/utils"

export let useReplace = (api: TreeNodeApi) : replace => {
    let replace:replace = {
        child(index: number, node: TreeNode){
            $object.set(api.node.nodes, index, node)
        },
        self: (node: TreeNode) => {
            if(!api.parent || !api.parent.replace.child) return;
            api.parent.replace.child(api.paths.index, node)
        }
    }
    if(
        !api.parent
        ||
        (
            api.parent 
            &&
            api.parent.schema['can-replace-nodes'] === false 
        )
    ) {
        replace.self = false
    }
    if(
        !api.hasNodes
        ||
        api.schema['can-clone-nodes'] === false 
    ) {
        replace.child = false
    }
    return replace
}