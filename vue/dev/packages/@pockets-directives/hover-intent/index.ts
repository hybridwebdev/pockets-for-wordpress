import hoverintent from "./hover-intent.js";

const getHandler = (binding) => {

    let { change = null } = binding.value ?? {}

    if ( typeof change === "function" ) {
        return change
    }

    return null

}

let hoverIntentDirective = {

    beforeMount(el, binding) {

        let handler = getHandler(binding)

        if (typeof handler !== "function") {
            return
        }

        let { options = {} } = binding.value ?? {}

        el.$hoverintentHandler = handler

        el.$hoverintent = hoverintent(
            el,
            () => {
                el.$hoverintentHandler(true)
            },
            () => {
                el.$hoverintentHandler(false)
            },
            {
                ...options,
                ...binding.modifiers
            }
        )

    },

    updated(el, binding) {

        if (!el.$hoverintent) {
            return
        }

        let handler = getHandler(binding)

        if (typeof handler === "function") {
            el.$hoverintentHandler = handler
        }

        let { options = {} } = binding.value ?? {}

        el.$hoverintent.options({
            ...options,
            ...binding.modifiers
        })

    },

    beforeUnmount(el) {

        if (el.$hoverintent) {
            el.$hoverintent.remove()
        }

    }

}
 
/**
    @description Vue directive wrapper for hoverintent. Fires hover callbacks only when intentional mouse movement is detected.

    @property {function} change Callback fired when hover state changes. Receives a boolean: - true = hover enter. - false = hover leave

    @property {object} [options] Configuration object passed directly to hoverintent.
    @property {number} [options.sensitivity=10] Mouse movement threshold before hover is considered intentional. Lower values trigger faster, higher values require steadier movement.
    @property {number} [options.interval=100] Polling interval in milliseconds used to compare mouse movement.

    @property {number} [options.timeout=0] Delay in milliseconds before firing hover leave.

    @property {boolean} [options.handleFocus=false] Enables focus and blur handling for keyboard accessibility.

    @property {modifier} [.capture{modifier}] Stops event propagation on mouseover when enabled. Used like a normal vue directive modifier. Eg: v-hover-intent.capture="{...options}"
*/
export default {
    ...hoverIntentDirective
}