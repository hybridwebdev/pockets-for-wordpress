// @ts-nocheck

export class ElementBase extends HTMLElement {

    hasMoved = false

    connectedCallback() {

        if ( this.hasMoved ) {
            return
        }

        this.hasMoved = true

        let ID = Math.random().toString( 36 ).slice( 2 )

        this.setAttribute( "target-ID", ID )

        let placeholder = document.createElement( "div" ) 
        placeholder.setAttribute( "v-pockets-app-guard", JSON.stringify( { ID } ) )

        placeholder.innerHTML = this.innerHTML

        this.replaceWith( placeholder )
        document.body.appendChild( this )

    }

}

export let ElementDirective = {

    mounted( el, binding ){
        
        let { ID } = binding.value

        let target = document.body.querySelector( `pockets-app-guard[ target-ID="${ID}" ]` )

        if( !target ) {
            return
        }
        
        target.setAttribute( 'resolved', true )

        el.replaceWith( target )

    }

}


export let use = () => {

}