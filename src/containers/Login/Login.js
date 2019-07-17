import React, {Component} from 'react';
import LoginBox from './LoginBox/LoginBox';
import SigninBox from './SigninBox/SigninBox';
import Background from '../../assets/login-background.jpg';
import "./Login.css";
 
class Login extends Component{
state = {
    showLogin: true
}
toggleShowLogin = () =>{
    this.setState((prevState, props)=>{
        return {
            showLogin: !prevState
        }
    })
}
render(){
    return(
        <div className="Login" style = {{ width: `-webkit-fill-available`,
            height: `-webkit-fill-available`,backgroundImage: `url(${Background})`}}>
                {this.state.showLogin ? <LoginBox showSignin={this.toggleShowLogin}></LoginBox> : <SigninBox showLoginBox={this.toggleShowLogin}></SigninBox>}
                
            </div>
    )
}
}

export default Login;
