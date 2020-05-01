import React from 'react';

import { HeaderContainer, OptionsContainer, LogoContainer, OptionLink } from './header.styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { cartHiddenSelector } from '../../redux/cart/cart.selectors';
import { currentUserSelector } from '../../redux/user/user.selectors'


const Header = ({ currentUser, hidden }) => (

    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink className='option' to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink className='option' to=''>
                CONTACT
            </OptionLink>
            {
                currentUser ? 
                <OptionLink as='div' onClick={() => {auth.signOut()}}>SIGN OUT</OptionLink>
                :
                <OptionLink className='option' to='/signin'>
                    SIGN IN
                </OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null :
            <CartDropdown/>
        }
    </HeaderContainer>
    
);

const mapStateToProps = createStructuredSelector({
    currentUser : currentUserSelector,
    hidden : cartHiddenSelector
})

export default connect(mapStateToProps)(Header);

