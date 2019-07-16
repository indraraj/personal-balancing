import React, {Component} from 'react';
import LoginBox from './LoginBox/LoginBox'
import Background from '../../assets/login-background.jpg';
import "./Login.css";
 
class Login extends Component{
render(){
    return(
        <div className="Login" style = {{ width: `-webkit-fill-available`,
            height: `-webkit-fill-available`,backgroundImage: `url(${Background})`}}>
                <LoginBox></LoginBox>
            </div>
    )
}
}

export default Login;
