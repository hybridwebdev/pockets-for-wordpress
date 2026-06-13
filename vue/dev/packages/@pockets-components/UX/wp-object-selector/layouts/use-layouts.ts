import { computed } from "vue"
import defaultView from "./default-view.vue"

let layouts = {
    'default': defaultView
}

export type Layouts = keyof typeof layouts

export let useLayouts = (props) => {
        
    let layout = computed( () => layouts[props.layout] ?? layouts.default )

    return { layout }

}