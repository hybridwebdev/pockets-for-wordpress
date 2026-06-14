import type { ObjectDirective } from 'vue'

type ScrollBinding = {
    enabled?: boolean
    parent?: string | HTMLElement | null

    behavior?: ScrollBehavior
    block?: 'start' | 'center' | 'end'

    mountedDelay?: number
}

const getEnabled = (value: ScrollBinding) =>
    value.enabled ?? true

const getScrollParent = (
    el: HTMLElement,
    value: ScrollBinding
): HTMLElement | null => {

    const parent = value.parent

    if ( parent instanceof HTMLElement ) {
        return parent
    }

    if ( typeof parent === 'string' ) {

        return el.closest( parent ) as HTMLElement | null

    }

    return el.parentElement

}

const scrollWithinParent = (
    el: HTMLElement,
    value: ScrollBinding
) => {

    const parent = getScrollParent(el, value)

    if (!parent) {
        return
    }

    const parentRect = parent.getBoundingClientRect()
    const elRect = el.getBoundingClientRect()

    let offset =
        elRect.top -
        parentRect.top +
        parent.scrollTop

    if (value.block === 'center') {
        offset =
            offset -
            parent.clientHeight / 2 +
            elRect.height / 2
    }

    if (value.block === 'end') {
        offset =
            offset -
            parent.clientHeight +
            elRect.height
    }

    parent.scrollTo({
        top: offset,
        behavior: value.behavior ?? 'smooth',
    })

}

/** 
    @description Scrolls an element into view relative to its parent container.

    @property {boolean} [enabled=true] If true, the element will be scrolled into view.
    @property {string<css selector> | HTMLElement | null} [parent] Scroll container to use. Defaults to immediate parent element.
    @property {'auto'|'smooth'} [behavior='smooth'] Scroll animation behavior.
    @property {'start'|'center'|'end'} [block='start'] Alignment position within the parent container.
    @property {number} [mountedDelay=100] Delay in milliseconds before initial mounted scroll occurs.
*/
export default {

    mounted(el, binding) {

        setTimeout(() => {

            const enabled = getEnabled(binding.value)

            if (!enabled) {
                return
            }

            scrollWithinParent(el, binding.value)

        }, binding.value.mountedDelay ?? 100)

    },

    updated(el, binding) {

        const prev = getEnabled(binding.oldValue ?? {})
        const next = getEnabled(binding.value)

        if (!next || prev === next) {
            return
        }

        scrollWithinParent(el, binding.value)

    },

}