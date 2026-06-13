
import formDirective from "./form-handler"
import submitDirective from "./submit-handler"

export let plugin:$pocketsPlugin = {
    createApp( app: any, $pockets: $pockets ){
        app.directive( 'pockets-form-handler', formDirective )
        app.directive( 'pockets-form-submit', submitDirective )
    },
}

