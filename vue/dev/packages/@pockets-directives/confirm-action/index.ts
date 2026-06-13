// @ts-nocheck

import type { DirectiveBinding, ObjectDirective } from "vue"

interface ConfirmClickOptions {

  delay?: number

  confirm?: (e: Event) => void
  cancel?: (e: Event) => void
  start?: (e: Event) => void
  reset?: (e: Event) => void

  confirmClass?: string | false
  defaultClass?: string | false

  confirmText?: string | false

  cancelOnBlur?: boolean
  cancelOnMouseLeave?: boolean

}

type ConfirmElement = HTMLElement & {

  __confirmClickOptions?: ConfirmClickOptions
  __prevOptions?: ConfirmClickOptions

  __handler?: (e: Event) => void
  __blurHandler?: (e: Event) => void
  __mouseLeaveHandler?: (e: Event) => void

}

const addClasses = (el: HTMLElement, classes: string | false) => {

  if (!classes) return

  el.classList.add(...classes.split(' ').filter(Boolean))

}

const removeClasses = (el: HTMLElement, classes: string | false) => {

  if (!classes) return

  el.classList.remove(...classes.split(' ').filter(Boolean))

}

/**
   @description A directive that requires a second confirmation interaction within a timeframe.

  @property {number} [delay=2000] Time window in milliseconds allowed for the second confirmation click.
  @property {() => void} [confirm=() => {}] Called when the second interaction confirms the action.
  @property {() => void} [cancel=() => {}] Called when the confirmation state is cancelled or times out.
  @property {() => void} [start=() => {}] Called when the first interaction starts the confirmation state.
  @property {() => void} [reset=() => {}] Called whenever the directive resets back to its default state.
  @property {string|false} [confirmClass=false] CSS classes applied while waiting for confirmation.
  @property {string|false} [defaultClass=false] CSS classes applied during the default idle state.
  @property {string|false} [confirmText=false] Temporary text shown while waiting for confirmation. Set to false to preserve the existing element content.
  @property {boolean} [cancelOnBlur=true] Automatically cancels the confirmation state when the element loses focus.
  @property {boolean} [cancelOnMouseLeave=true] Automatically cancels the confirmation state when the mouse leaves the element.
*/

export default {
 
  mounted(el: ConfirmElement, binding: DirectiveBinding<ConfirmClickOptions>) {

    let timer: number | null = null
    let clickedOnce = false
    let originalInnerHTML = el.innerHTML

    const getOptions = (): ConfirmClickOptions => ({
      
      delay: 2000,

      confirm: () => {},
      cancel: () => {},
      start: () => {},
      reset: () => {},

      confirmClass: false,
      defaultClass: false,
      confirmText: false,

      cancelOnBlur: true,
      cancelOnMouseLeave: true,

      ...(el.__confirmClickOptions || {})
    })

    const applyBaseClasses = () => {
      const options = getOptions()
      addClasses(el, options.defaultClass)
    }

    const reset = (event: Event) => {

      const options = getOptions()

      if (timer) clearTimeout(timer)

      options.reset(event)

      removeClasses(el, options.confirmClass)
      addClasses(el, options.defaultClass)

      if (options.confirmText !== false) {
        el.innerHTML = originalInnerHTML
      }

      clickedOnce = false
      timer = null

    }

    const cancel = (event: Event) => {

      if (!clickedOnce) return

      const options = getOptions()

      options.cancel(event)

      reset(event)

    }

    el.__handler = (event: Event) => {

      const options = getOptions()

      if (timer) clearTimeout(timer)

      if (!clickedOnce) {

        originalInnerHTML = el.innerHTML

        options.start(event)

        removeClasses(el, options.defaultClass)
        addClasses(el, options.confirmClass)

        if (options.confirmText !== false) {
          el.innerHTML = options.confirmText
        }

        clickedOnce = true

        timer = window.setTimeout(() => {

          options.cancel(event)
          reset(event)

        }, options.delay)

        return

      }

      options.confirm(event)

      reset(event)

    }

    el.__blurHandler = (event: Event) => {

      const options = getOptions()

      if (!options.cancelOnBlur) return

      cancel(event)

    }

    el.__mouseLeaveHandler = (event: Event) => {

      const options = getOptions()

      if (!options.cancelOnMouseLeave) return

      cancel(event)

    }

    el.__confirmClickOptions = binding.value || {}
    el.__prevOptions = binding.value || {}

    applyBaseClasses()

    el.addEventListener("click", el.__handler)
    el.addEventListener("blur", el.__blurHandler)
    el.addEventListener("mouseleave", el.__mouseLeaveHandler)

  },

  updated(el: ConfirmElement, binding: DirectiveBinding<ConfirmClickOptions>) {

    const prev = el.__prevOptions || {}
    const next = binding.value || {}

    // remove old state
    removeClasses(el, prev.defaultClass || false)
    removeClasses(el, prev.confirmClass || false)

    // restore text if it was overridden
    if (prev.confirmText !== false) {
      el.innerHTML = el.innerHTML
    }

    // store new options
    el.__confirmClickOptions = next
    el.__prevOptions = next

    // reapply base state if not in confirm mode
    if (el.__handler && !el.dataset.clickedOnce) {
      addClasses(el, next.defaultClass || false)
    }

  },

  unmounted(el: ConfirmElement) {

    el.removeEventListener("click", el.__handler)
    el.removeEventListener("blur", el.__blurHandler)
    el.removeEventListener("mouseleave", el.__mouseLeaveHandler)

  }

}
