import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { CartToggleHidden } from '../../redux/cart/cart.actions';
import { cartItemsCountSelector } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect'

import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg';


const CartIcon = ({ CartToggleHidden, itemCount }) => (
    <div className='cart-icon' onClick={ CartToggleHidden }>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    CartToggleHidden : () => dispatch(CartToggleHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount : cartItemsCountSelector
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);