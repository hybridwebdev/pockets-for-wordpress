// @ts-nocheck
import $importedOptions from '@pockets-core-assets/css/export/index.module.scss' 

export let bsOptions = new Proxy( $importedOptions, {
    
    get: ( target, key ) => {
        
        if( target[ key ] ) {
            
            let options = target[ key ].split(",")
            
            if( key == 'breakpoints' ) { 
                options = [ ...options, "none" ].sort().filter((value, index, self) => self.indexOf(value) === index);
            }

            return options
            
        }

    }

} )

export { context } from './context'