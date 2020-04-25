import CartActionTypes from './cart.types'; 

export const CartToggleHidden = () => ({
    type : CartActionTypes.TOGGLE_CART
});

export const AddItem = item => ({
    type : CartActionTypes.ADD_ITEM,
    payload : item
});

