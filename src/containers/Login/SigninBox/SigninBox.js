import React from "react";
import WhiteBox from '../../../helpers/WhiteBox/WhiteBox';
import LoginInput from '../components/LoginInput/LoginInput';
import {withRouter} from 'react-router-dom';
import LoginFormButton from '../../../helpers/LoginFormButton/LoginFormButton';
import './SigninBox.css'

const SigninBox = (props) =>{
    const signInfunction = () =>{
        console.log('Signin button clicked');
    }
    return(
        <WhiteBox>
            <div className='SigninBox'>
                <h2>Sign into Kazerian Box</h2>
                <LoginInput placeholderText='Email Address' inputType='email'></LoginInput>
                <LoginInput placeholderText='Password' inputType='password'></LoginInput>
                <LoginInput placeholderText='Verify Password' inputType='password'></LoginInput>
                <LoginFormButton loginFormBtnHandler={signInfunction}>Sign In</LoginFormButton>
                <p> back to <u className='LoginLink' onClick={props.showLoginBox}>Login.</u></p>
                <p className='LoginDisclaimer'>Create account for extra security with kazerian love.</p>
            </div>
        </WhiteBox>
    )

}

export default withRouter(SigninBox);