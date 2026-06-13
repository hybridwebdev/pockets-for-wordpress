// @ts-nocheck

import type { ObjectDirective } from "vue"
import { useDebounceFn } from "@vueuse/core"

let events = ["input", "change", "select", "update"] 

type DebounceBinding = {
  delay?: number
  [key: string]: any
}

function createHandlers(el: any, binding: DebounceBinding) {

  const { delay = 500 } = binding.value || {}

  const handlers: Record<string, EventListener> = {}

  events.forEach((eventName) => {

    const callback = binding.value?.[eventName]

    if (!callback) {
      return
    }

    const debounced = useDebounceFn( ( event: Event ) => callback( event ), delay)

    const handler: EventListener = (event) => debounced( event )

    handlers[eventName] = handler
    el.addEventListener(eventName, handler)
  })

  el.__debounceHandlers = handlers

}

function clearHandlers(el: any) {

  const handlers = el.__debounceHandlers

  if (!handlers) return

  events.forEach((eventName) => {
    if (handlers[eventName]) {
      el.removeEventListener(eventName, handlers[eventName])
    }
  })

  delete el.__debounceHandlers

}

const debounceDirective: ObjectDirective<HTMLElement, DebounceBinding> = {

  beforeMount( el, binding ) {
    createHandlers( el, binding )
  },

  updated( el, binding ) {
    clearHandlers( el )
    createHandlers( el, binding )
  },

  unmounted(el) {
    clearHandlers( el )
  },

}

/**
    @description Debounces DOM event callbacks on an element using VueUse's <a href='https://vueuse.org/shared/useDebounceFn/'>useDebounceFn</a>.
    Supports multiple event handlers defined as keys on the binding value.

    @property { number } [delay=500] Delay in milliseconds before the callback is executed after the last event trigger.

    @property { Function } [input] Callback fired on input event (debounced).
    @property { Function } [change] Callback fired on change event (debounced).
    @property { Function } [select] Callback fired on select event (debounced).
    @property { Function } [update] Callback fired on update event (debounced).
*/

export default {
    ...debounceDirective
}