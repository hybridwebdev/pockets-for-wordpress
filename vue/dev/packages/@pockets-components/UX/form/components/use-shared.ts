import { context } from '../context'
import { reactiveComputed } from '@vueuse/core'
import { $pockets } from "@pockets-core"
import axios, { AxiosRequestConfig } from 'axios'

export let useValidation = ( props ) => {

    let form = context.inject.form( false )
        
    let validation = reactiveComputed( () => {
        
        let validation = ( form.validation ?? [] ).filter( message => message.path == props.path )
        let errors = validation.filter( message => message.type == 'error' )
        let success = validation.filter( message => message.type == 'success' )
        return {
            isValid: errors.length == 0,
            errors,
            success
        }

    } )

    return { 
        validation
    }

}

export let useSubmitHandler = form => {

    let submitHandler = async( event ) => {

        form.validation = []
        
        form.busy = true

        let $formData = new FormData( event.target )

        let { data: response } = await axios( {
            method: "POST",
            url: `/wp-json/pockets/forms/${form.endpoint}/${form.formId}`,
            data: $formData, 
            headers: {
                "X-WP-Nonce": $pockets.data.crud.nonce
            }
        } )

        form.busy = false

        Object.assign( form, response )

    }

    return {
        submitHandler 
    }
    
}

export let pathToFormName = ( dotString:string ) => {
    return dotString.split('.').map((segment, index) => {
        return index === 0 ? segment : `[${segment}]`;
    }).join('');
}
