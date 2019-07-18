import React, { Component, Fragment } from "react"
import './Layout.css';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import TopTip from "../Toptip/TopTip"
import Landing from "../Landing/Landing";

class Layout extends Component {
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