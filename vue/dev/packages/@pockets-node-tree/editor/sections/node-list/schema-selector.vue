<script>
import { computed } from "vue"
import nodeSelector from "./node-selector.vue"
import {setup, props} from "./setup"
import { editor } from "@pockets-node-tree"
import { chain } from "lodash"

export default {

    mixins: [ nodeSelector ],
    props,

    setup(props, ctx) {
            
        let api = setup(props, ctx)

        let select = async( { node } ) => {
            editor.active.initialize.activeWith( node )
        }

        let isSelected = (node) => {
            return api?.selectedModel?.value === node?.node?.schema ? "active" : ''
        }

        let nodeList = computed(() => {

            return api.nodeList.value.filter( schema => {
                if( schema['can-set-as-schema'] === false ) {
                    return false
                }
                return true
            })

        })
        
        let nodeGroup = computed( () => chain( nodeList.value )
            .groupBy( 'group' )
            .toPairs()
            .sort((a, b) => a[0].localeCompare( b[0] ) )
            .fromPairs()
            .value()
        )

        return {
            ...api,
            nodeList,
            isSelected,
            select,
            nodeGroup
        }

    }, 
}
</script> 