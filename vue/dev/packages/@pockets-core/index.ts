
import { plugins } from "@pockets-core/plugins"
import { init } from "@pockets-core/init"

import event from 'tiny-emitter/instance'
import * as formatters from "@pockets-core/utils/formatters"

export let $pockets: $pockets = {
        
    init,
    plugins,
    event,
    formatters

}

window.$pockets = $pockets
