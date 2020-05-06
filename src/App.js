import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';


import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shopPage.component';
import CheckoutPage from './pages/checkout/checkout.components';

import Header from './components/header/header.component';
import SignInandSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { currentUserSelector } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])



    return(
      <div>
        <Header/>
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'/>) : (<SignInandSignUp/>)}/>
        </Switch>
        {/* <HomePage/> */}

      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  currentUser : currentUserSelector,
});

const mapStateToDispatch = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapStateToDispatch)(App);
