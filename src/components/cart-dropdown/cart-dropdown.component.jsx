import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-items/cartItems.component';
import { cartItemsSelector } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { CartToggleHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            
            {
                cartItems.length ? 
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))
                :
                <span className='empty-message'>YOUR CART IS EMPTY</span>
            }
        </div>
        <CustomButton onClick={ () => {
            history.push('/checkout');
            dispatch(CartToggleHidden());
        } } >GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems : cartItemsSelector
})

export default withRouter(connect(mapStateToProps)(CartDropdown));