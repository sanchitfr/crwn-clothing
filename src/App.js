import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shopPage.component';
import Header from './components/header/header.component';
import SignInandSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state= {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null; //this is used to close the authStateChange thread after the applilcation is unmounted from the DOM

  componentDidMount(){
    //the onAuthStateChange is an open connection which keeps checking whether a user has logged in or logged out.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        //onSnaopshot method returns us the snapshot corresponding to the documentReference object
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      else{
        this.setState({
          currentUser : userAuth
        })
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
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route exact={true} path='/shop' component={ShopPage}/>
          <Route exact={true} path='/signin' component={SignInandSignUp}/>
        </Switch>
        {/* <HomePage/> */}

      </div>
    );
  }
}

export default App;
