<script lang="ts">
import rootLoader from "@pockets-node-tree/root/loader/index.vue"
import treeWalker from "./walker.vue"
export default {
    extends: rootLoader,
    components: {
        treeWalker
    },
    setup: props => {
        return {
            ...rootLoader.setup(props),
            renderSlot: true
        }
    }
}
</script>