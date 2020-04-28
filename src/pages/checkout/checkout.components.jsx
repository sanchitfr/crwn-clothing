import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';


import { cartItemsSelector, cartTotalSelector } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

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
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : cartItemsSelector,
    total : cartTotalSelector
})

export default connect(mapStateToProps)(CheckoutPage);