import React from 'react';
import { clearItemFromCart, RemoveItem, AddItem } from '../../redux/cart/cart.actions';

import { connect } from 'react-redux';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItemFromCart, RemoveItem, AddItem }) => {
    const { imageUrl, name, quantity, price } = cartItem
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => RemoveItem(cartItem)}>&#10096;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => AddItem(cartItem)}>&#10097;</div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10006;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItemFromCart : cartItem => dispatch(clearItemFromCart(cartItem)),
    RemoveItem : cartItem => dispatch(RemoveItem(cartItem)),
    AddItem : cartItem => dispatch(AddItem(cartItem))
}) 

export default connect(null, mapDispatchToProps)(CheckoutItem);