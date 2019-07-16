import React from "react";
import WhiteBox from '../../../helpers/WhiteBox/WhiteBox';
import LoginInput from '../components/LoginInput/LoginInput';
import LoginFormButton from '../../../helpers/LoginFormButton/LoginFormButton';
import SocialMedia from '../components/SocialMedia/SocialMedia'
import './LoginBox.css'

const LoginBox = (props) =>{
    return(
        <WhiteBox>
            <div className='LoginBox'>
                <h2>Log into Kazerian Box</h2>
                <h4>or <u>Create Account</u></h4>
                <LoginInput placeholderText='Email Address' inputType='email'></LoginInput>
                <LoginInput placeholderText='Password' inputType='password'></LoginInput>
                <LoginFormButton>Log In</LoginFormButton>
                <p> or continue with.</p>
                <SocialMedia></SocialMedia>
                <p className='LoginDisclaimer'>Secure login for with extra kazerian love.</p>
            </div>
        </WhiteBox>
    )

}

export default LoginBox;