
interface $inputArgs {
    events: [ "change" | "update" | "input" ]
}

import type { DirectiveBinding } from 'vue'

let inputDirective = {
    
    defaultEvents: [ 'change', 'update', "input" ],
    
    mounted( el: HTMLElement, binding: DirectiveBinding< $inputArgs > ) {

        let { events = inputDirective.defaultEvents } = binding.value ?? {}

        const triggerSubmit = () => {

            let form = el.closest( 'form' )

            if( !form ) {
                return
            }

            form.dispatchEvent( new Event( 'submit', { bubbles: true, cancelable: true } ) )

        }

        events.map( eventName => {
            el.addEventListener( eventName, triggerSubmit )
        } )
        
        el['pockets-form-submit'] = triggerSubmit

    },

    unmounted( el: HTMLElement, binding: DirectiveBinding< $inputArgs > ) {
        
        let { events = inputDirective.defaultEvents } = binding.value ?? {}

        events.map( eventName => {
            el.removeEventListener( eventName, el[ 'pockets-form-submit' ] )
        } )

    }

}

/**
    @description A Vue directive that automatically triggers a form submit event when the bound element emits one of the configured input events. By default, it listens to "change", "update", and "input" events and dispatches a bubbling, cancelable submit event on the closest parent form. Useful for auto-submitting forms when inputs change without requiring manual submit buttons or watchers.
    @property { <[]string> "change"|"update"|"input"} [events=<"change","update","input">] Array of DOM events that will trigger the form submit.

*/
export default {
    ...inputDirective
}