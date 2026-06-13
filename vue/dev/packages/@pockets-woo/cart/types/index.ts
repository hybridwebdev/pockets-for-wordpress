export interface addProduct {
    
    addItem: {
        
        quantity: number 

        product_id: number
        variation_id: number
        
        /**
            Additional meta data to attach to item in cart
        */
        cart_item_data?: {}

        /**
            Additional variation data to attach to item in cart
        */
        variation?: {}

    }

}
