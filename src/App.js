import React,{useState} from 'react';
import Layout from './containers/Layout/Layout';
import Login from './containers/Login/Login';
import { Route, Switch, withRouter } from "react-router-dom";
import AuthContext from './context/auth-context';

function App(props) {
  const [loginState,setLoginState] = useState(false);
  const userLoginHandler = (currentLoginState) =>{
    setLoginState(!currentLoginState);
    localStorage.setItem('storedLoginState', !currentLoginState);
    currentLoginState ? props.history.push('/') : props.history.push('/Home');
  }
  return (
    <AuthContext.Provider value={{loginState: loginState, userLoginHandler: userLoginHandler}}>
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="" component={Layout}></Route>
    </Switch>
    </AuthContext.Provider>
  );
}

export default withRouter(App);
