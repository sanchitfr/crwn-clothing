import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-items/cartItems.component';
import { cartItemsSelector } from '../../redux/cart/cart.selectors';

import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems : cartItemsSelector(state)
})

export default connect(mapStateToProps)(CartDropdown);