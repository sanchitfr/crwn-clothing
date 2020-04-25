import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import CartToggleHidden  from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg';


const CartIcon = ({ CartToggleHidden }) => (
    <div className='cart-icon' onClick={ CartToggleHidden }>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    CartToggleHidden : () => dispatch(CartToggleHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);