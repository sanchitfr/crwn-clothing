import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';


import { cartItemsSelector, cartTotalSelector } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/StripeButton.components';

import './checkout.styles.scss';


const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Item</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
        }
        {
            total ?
            <div className='total'>TOTAL: ${total}</div> 
            :
            <div className='empty-cart'>
                <h1>Your Cart Is Empty!</h1>
                <Link to='/shop'>BACK TO SHOP</Link>
            </div>
        }
        <div className='warning-text'>
            *Please use the following card details to process payments
            <br/>
            4242 4242 4242 4242 Exp: 01/22 CVV:123
        </div>
        <StripeButton price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : cartItemsSelector,
    total : cartTotalSelector
})

export default connect(mapStateToProps)(CheckoutPage);