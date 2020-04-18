import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shopPage.component';


function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage}/>
        <Route exact={true} path='/shop' component={ShopPage}/>
      </Switch>
      {/* <HomePage/> */}

    </div>
  );
}

export default App;
