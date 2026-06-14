export async function resolveComponentDefinition( app, name ) {

    if( !app || !name ) {
        return null
    }

    const comp = app.component(name)
        
    if ( !comp ) {
        return null
    }

    if ( comp.__asyncLoader ) {
        const resolved = await comp.__asyncLoader()
        return resolved.default || resolved
    }

    return comp

}