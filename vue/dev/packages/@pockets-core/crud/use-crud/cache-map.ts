
export class cacheMap {
    map = {}
    set( k, v ){
        this.map[ k ] = v
    }
    get( k ) {
        return this.map[ k ]
    }
    delete(k){
        delete this.map[ k ]
    }
    clear(k){
        delete this.map[ k ]
    }
}
