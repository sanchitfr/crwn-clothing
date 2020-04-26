export const additemToCart = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

    if(existingItem){
        return (
            cartItems.map(cartItem => 
                cartItem.id === itemToAdd.id ?
                {...cartItem, quantity : cartItem.quantity + 1}
                :
                cartItem
            )
        )
    }
    return(
        [...cartItems, {...itemToAdd, quantity : 1}]
    )
}

export const removeItemFromCart = (cartItems, itemToBeRemoved) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemToBeRemoved.id);

    if(existingItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== itemToBeRemoved.id)
    }
    else{
        return cartItems.map(cartItem => 
            cartItem.id === itemToBeRemoved.id ?
            {...cartItem, quantity : cartItem.quantity - 1}
            :
            cartItem
        )
    }
    
}