/**
  
    @description Vue directive that forwards directive lifecycle hooks to callback functions provided.
 
    @property {(el: HTMLElement) => void} [beforeMount] Called before the element is mounted into the DOM.
    @property {(el: HTMLElement) => void} [mounted] Called after the element has been mounted into the DOM.
    @property {(el: HTMLElement) => void} [beforeUpdate] Called before the containing component updates.
    @property {(el: HTMLElement) => void} [updated] Called after the containing component updates.
    @property {(el: HTMLElement) => void} [beforeUnmount] Called before the element is unmounted from the DOM.
    @property {(el: HTMLElement) => void} [unmounted] Called after the element has been unmounted from the DOM.
*/

export default {

    beforeMount(el, binding) {
        if (typeof binding.value?.beforeMount === 'function') {
            binding.value.beforeMount(el);
        }
    },

    mounted(el, binding) {
        if (typeof binding.value?.mounted === 'function') {
            binding.value.mounted(el);
        }
    },

    beforeUpdate(el, binding) {
        if (typeof binding.value?.beforeUpdate === 'function') {
            binding.value.beforeUpdate(el);
        }
    },

    updated(el, binding) {
        if (typeof binding.value?.updated === 'function') {
            binding.value.updated(el);
        }
    },

    beforeUnmount(el, binding) {
        if (typeof binding.value?.beforeUnmount === 'function') {
            binding.value.beforeUnmount(el);
        }
    },

    unmounted(el, binding) {
        if (typeof binding.value?.unmounted === 'function') {
            binding.value.unmounted(el);
        }
    }
    
}