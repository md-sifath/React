import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Login from './Login';
import Singup from './Singup';
import {Route, Switch} from 'react-router-dom';

const App=()=> {
  return (
    <>
      <Switch>
        <Route  path="/singup" component={Singup}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </>
  )
}

export default App;
