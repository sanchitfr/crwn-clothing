import React from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { cartHiddenSelector } from '../../redux/cart/cart.selectors';
import { currentUserSelector } from '../../redux/user/user.selectors'

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (

    <div className='header'>
        <Link className="logo-container" to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to=''>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => {auth.signOut()}}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null :
            <CartDropdown/>
        }
    </div>
    
);

const mapStateToProps = createStructuredSelector({
    currentUser : currentUserSelector,
    hidden : cartHiddenSelector
})

export default connect(mapStateToProps)(Header);

