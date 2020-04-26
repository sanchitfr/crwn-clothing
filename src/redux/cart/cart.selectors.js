import { createSelector } from 'reselect';

//input selectors
const cartSelector = state => state.cart


//output selectors
export const cartItemsSelector = createSelector(
[cartSelector],
cart => cart.cartItems
);

export const cartItemsCountSelector = createSelector(
    [cartItemsSelector],
    cartItems => cartItems.reduce((accumulator, item) => (
        accumulator + item.quantity
    ), 0)
);

