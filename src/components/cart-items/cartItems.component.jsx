import React from 'react';
import './cartItems.styles.scss';

const CartItem = ({cartItem : { imageUrl, name, price, quantity }}) => (

    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <div className='price'>{quantity} x ${price}</div>
        </div>
    </div>
)

export default CartItem;