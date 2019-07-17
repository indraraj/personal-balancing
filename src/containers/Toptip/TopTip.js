import React, {Component} from "react";
import TopText from "../../components/TopText/TopText";
import Logo from "../../components/Logo/Logo";
import AuthContext from '../../context/auth-context';
import "./TopTip.css";

class TopTip extends Component {
    static contextType = AuthContext;
    render(){
        return (
            <div className="TopTip">
               <Logo></Logo>
               {this.context.loginState ? <TopText>Logout</TopText> : <TopText>Login</TopText>}
               
            </div>
        );
    }
}

export default TopTip;