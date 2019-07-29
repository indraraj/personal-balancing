import React, { Component, Fragment } from "react"
import './Layout.css';
import {Switch, Route} from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import Home from '../Home/Home';
import TopTip from "../Toptip/TopTip";
import Landing from "../Landing/Landing";

class Layout extends Component {
    static contextType = AuthContext;
    componentDidMount() {
        if(localStorage.getItem('storedLoginState') && localStorage.getItem('storedLoginState') === 'true'){
            this.context.userLoginHandler(false)
        }
    }
    render(){
        return(
            <Fragment>
                <TopTip></TopTip>
                <Switch>
                    <Route path='/Home' component={Home}></Route>
                    <Route path='' component={Landing}></Route>
                </Switch>
            </Fragment>
        )        
    }
}

export default Layout;