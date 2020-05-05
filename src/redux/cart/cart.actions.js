import CartActionTypes from './cart.types'; 

export const CartToggleHidden = () => ({
    type : CartActionTypes.TOGGLE_CART
});

export const AddItem = item => ({
    type : CartActionTypes.ADD_ITEM,
    payload : item
});

export const RemoveItem = item => ({
    type : CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type : CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload : item
});

export const clearCartOnSignOut = () => ({
    type : CartActionTypes.CLEAR_CART_ON_SIGN_OUT
})

