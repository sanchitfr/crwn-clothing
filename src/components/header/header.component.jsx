import React from 'react';

import { HeaderContainer, OptionsContainer, LogoContainer, OptionLink } from './header.styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { signOutStart } from '../../redux/user/user.actions';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { cartHiddenSelector } from '../../redux/cart/cart.selectors';
import { currentUserSelector } from '../../redux/user/user.selectors'

const Header = ({ currentUser, hidden, signOutStart }) => (
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
                <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
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

const mapDispatchToProps = dispatch =>({
    signOutStart : () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

