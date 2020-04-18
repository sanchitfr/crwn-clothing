import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.components';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);


function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage}/>
        <Route exact={true} path='/shop/hats' component={HatsPage}/>
      </Switch>
      {/* <HomePage/> */}

    </div>
  );
}

export default App;
