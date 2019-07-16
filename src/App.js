import React from 'react';
import Layout from './containers/Layout/Layout';
import Login from './containers/Login/Login';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="" component={Layout}></Route>
    </Switch>
  );
}

export default App;
