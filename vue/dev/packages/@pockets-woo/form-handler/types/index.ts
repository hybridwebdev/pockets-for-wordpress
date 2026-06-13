
export interface $formOptions {
    /**
        Fired when form handler fails. If set to a string,
        it will use $pockets.toast.error and use the string for its message
    */
    error: ( res ) => | string | null | CallableFunction

    success: ( res ) => | string | null | CallableFunction 
    
    fail: ( err ) => | null | CallableFunction
    
    /**
        Mapped action to fire. 
    */
    action: "cart.add.item" | "cart.add.simple" | "cart.add.grouped"

}
 