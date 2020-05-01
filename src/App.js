import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';


import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shopPage.component';
import CheckoutPage from './pages/checkout/checkout.components';

import Header from './components/header/header.component';
import SignInandSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect'
import { currentUserSelector } from './redux/user/user.selectors'

class App extends React.Component {

  unsubscribeFromAuth = null; //this is used to close the authStateChange thread after the applilcation is unmounted from the DOM

  componentDidMount(){
  const { setCurrentUser } = this.props;

    //the onAuthStateChange is an open connection which keeps checking whether a user has logged in or logged out.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        //onSnapshot method returns us the snapshot corresponding to the documentReference object
        userRef.onSnapshot(snapShot => {
         setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      else{
        setCurrentUser(userAuth);
      }


    });
  };

  //we will call the unsubscribeFromAuth method when the application unmounts from the DOM
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render (){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInandSignUp/>)}/>
        </Switch>
        {/* <HomePage/> */}

      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser : currentUserSelector,
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser : user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
