import directive from "./"

let createApp = (app: any, $pockets: $pockets) => { 
    app.directive( 'scroll-into-view', directive )
}

export let plugin:$pocketsPlugin = {
    createApp
}