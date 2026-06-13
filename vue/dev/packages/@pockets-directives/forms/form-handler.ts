// @ts-nocheck

import serialize  from 'form-serialize'

import type { DirectiveBinding } from 'vue'

interface $formArgs {
    submit: ( data: unknown ) => any
}

let formDirective = {

    mounted( el: HTMLFormElement, binding: DirectiveBinding< $formArgs > ) {
        
        let { 
            submit = () => {} 
        } = binding.value
        
        const handlerFN = ( event: Event ) => {

            event.preventDefault()
            submit( serialize( event.target, { hash: true, empty: true } ) )

        }

        el['pockets-form-handler'] = handlerFN 

        el.addEventListener( 'submit', handlerFN )

    },

    unmounted( el: HTMLFormElement ) {
        el.removeEventListener( 'submit', el['pockets-form-handler'] );
    }

}

/**
    @description A simple directive that fires a provided callback when a form is submitted. Great for things like AJAX forms.
    @property {function(<object>formData)} submit This is called when the form is submitted. Receives form data as a serialized object.

*/
export default {
    ...formDirective
}