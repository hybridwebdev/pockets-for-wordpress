import { computed, nextTick } from "vue"
import type { Ref } from 'vue'

/**
 * A custom composable that provides a computed property for single selection
 * from a list of options in a space-separated string model.
 *
 * - The function accepts a model value as a `Ref<string>` and an array of options as a `Ref<string[]>`.
 * - It computes the available options and class list by splitting the model value.
 * - The computed property allows for getting and setting a single valid option based on the current model value.
 * - When the option changes, it filters the model value string, preserving non-option values and updating the model with the selected option.
 *
 * @param {Ref<string>} $modelValue - The reactive model value as a space-separated string.
 * @param {Ref<string[]>} options - The array of selectable option strings.
 * @returns {ComputedRef<string | null>} A computed property to get or set the selected option.
 */

export let useSingleSelection = ( $modelValue: Ref<string>, options: Ref<[ string ]> ) => {

    let $optionValues = computed( () => Object.values(options.value) )

    let $classList = computed( () => $modelValue.value.split(" ") )

    let $local = computed( {

        get: () => {
            let $filtered = $classList.value.filter( e => $optionValues.value.includes( e ) )
            if( $filtered.length == 0 ) {
                return null
            }
            return $filtered[0]
        },

        set: ( value ) => {

            let filtered = $classList.value.filter( e => !$optionValues.value.includes( e ) )
            
            if( value && !$classList.value.includes( value ) )  {
                filtered = [ ...filtered, value ]
            }

            /**
                Use next tick so avoid race conditions if value has multiple bindings.
            */
            nextTick( () => {
                $modelValue.value = filtered.join(" ")
            } )

        }

    } )

    return $local

}
