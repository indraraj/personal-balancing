import React, {useContext, useState, useRef} from "react";
import WhiteBox from '../../../helpers/WhiteBox/WhiteBox';
import LoginInput from '../components/LoginInput/LoginInput';
import {withRouter} from 'react-router-dom';
import LoginFormButton from '../../../helpers/LoginFormButton/LoginFormButton';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import AuthContext from '../../../context/auth-context';
import './LoginBox.css'

const LoginBox = (props) =>{
    const authContext = useContext(AuthContext);
    const errorMsgRef = useRef(null);
    const [userEmail,setUserEmail] = useState('');
    const [password,setPassword] = useState('');
    const userLoginHandlerBtn = () =>{
        if((userEmail === 'indra' || userEmail === 'riya') && password === 'ihl')
            authContext.userLoginHandler(authContext.loginState)
        else
            errorMsgRef.current.style.display = 'block';
    }
    const userEntryFocus = (e) =>{
        errorMsgRef.current.style.display = 'none';
    }
    return(
        <WhiteBox>
            <div className='LoginBox'>
                <h2>Log into Kazerian Box</h2>
                <h4>or <u className='CreateAccountLink' onClick={props.showSignin}>Create Account</u></h4>
                <LoginInput placeholderText='Email Address' userFocus={userEntryFocus} name='userEmail' inputfeild={userEmail} inputfeildSetter={setUserEmail} inputType='email'></LoginInput>
                <LoginInput placeholderText='Password' userFocus={userEntryFocus} name='password' inputfeild={password} inputfeildSetter={setPassword} inputType='password'></LoginInput>
                <p className='errorMsg' ref={errorMsgRef} > Incorrect email or password, please try again.</p>
                <LoginFormButton loginFormBtnHandler={userLoginHandlerBtn}>Log In</LoginFormButton>
                <p> or continue with.</p>
                <SocialMedia></SocialMedia>
                <p className='LoginDisclaimer'>Secure login for extra security with kazerian love.</p>
            </div>
        </WhiteBox>
    )

}

export default withRouter(LoginBox);