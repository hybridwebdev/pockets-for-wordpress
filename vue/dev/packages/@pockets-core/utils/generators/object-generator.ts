
export let objectGenerator = function *( initialObj = {} ) {
    let obj = initialObj
    while (true) {
        let newProperties = yield obj
        Object.assign( obj, newProperties )
    }
}