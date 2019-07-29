import React, {useContext} from "react";
import WhiteBox from '../../../helpers/WhiteBox/WhiteBox';
import LoginInput from '../components/LoginInput/LoginInput';
import {withRouter} from 'react-router-dom';
import LoginFormButton from '../../../helpers/LoginFormButton/LoginFormButton';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import AuthContext from '../../../context/auth-context';
import './LoginBox.css'

const LoginBox = (props) =>{
    const authContext = useContext(AuthContext);
    return(
        <WhiteBox>
            <div className='LoginBox'>
                <h2>Log into Kazerian Box</h2>
                <h4>or <u className='CreateAccountLink' onClick={props.showSignin}>Create Account</u></h4>
                <LoginInput placeholderText='Email Address' inputType='email'></LoginInput>
                <LoginInput placeholderText='Password' inputType='password'></LoginInput>
                <LoginFormButton loginFormBtnHandler={() => authContext.userLoginHandler(authContext.loginState)}>Log In</LoginFormButton>
                <p> or continue with.</p>
                <SocialMedia></SocialMedia>
                <p className='LoginDisclaimer'>Secure login for extra security with kazerian love.</p>
            </div>
        </WhiteBox>
    )

}

export default withRouter(LoginBox);