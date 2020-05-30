import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/home';
import Login from '../login/login';
import Register from '../register/register';

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/register'>
        <Register />
      </Route>
    </Switch>
  );
}

export default Routes;
