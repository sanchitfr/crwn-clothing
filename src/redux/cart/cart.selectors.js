import { createSelector } from 'reselect';

//input selectors
const cartSelector = state => state.cart


//output selectors
export const cartItemsSelector = createSelector(
[cartSelector],
cart => cart.cartItems
);

export const cartHiddenSelector = createSelector(
    [cartSelector],
    cart => cart.hidden
)

export const cartItemsCountSelector = createSelector(
    [cartItemsSelector],
    cartItems => cartItems.reduce((accumulator, item) => (
        accumulator + item.quantity
    ), 0)
);

export const cartTotalSelector = createSelector(
    [cartItemsSelector],
    cartItems => cartItems.reduce((accumulator, item) => (
        accumulator + (item.quantity * item.price)
    ), 0)
);

