import React, {Component} from "react"
import TopText from "../../components/TopText/TopText"
import Logo from "../../components/Logo/Logo"
import "./TopTip.css"

class TopTip extends Component {
    render(){
        return (
            <div className="TopTip">
               <Logo></Logo>
               <TopText>Login</TopText>
            </div>
        );
    }
}

export default TopTip;