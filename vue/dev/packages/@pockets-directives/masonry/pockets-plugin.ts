import masonry from "./"

export let plugin:$pocketsPlugin = {
    
    createApp(app: any, $pockets: $pockets){
        
        app.directive( 'pockets-masonry', masonry )

    },
}

