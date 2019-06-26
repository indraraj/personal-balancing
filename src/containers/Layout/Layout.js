import React, { Component, Fragment } from "react"
import './Layout.css'
import TopTip from "../Toptip/TopTip"
import Landing from "../Landing/Landing";

class Layout extends Component {
    render(){
        return(
            <Fragment>
                <TopTip></TopTip>
                <Landing></Landing>
            </Fragment>
        )        
    }
}

export default Layout;