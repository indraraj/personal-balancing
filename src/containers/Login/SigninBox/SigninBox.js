import React, {useState, useRef} from "react";
import WhiteBox from '../../../helpers/WhiteBox/WhiteBox';
import LoginInput from '../components/LoginInput/LoginInput';
import {withRouter} from 'react-router-dom';
import LoginFormButton from '../../../helpers/LoginFormButton/LoginFormButton';
import './SigninBox.css'

const SigninBox = (props) =>{
    const errorMsgRef = useRef(null)
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const signInfunction = () =>{
        if(password !== confirmPass)
            errorMsgRef.current.style.display = 'block';
        console.log('Signin button clicked');
    }
    const userEntryFocus = (e) =>{
        errorMsgRef.current.style.display = 'none';
    }
    return(
        <WhiteBox>
            <div className='SigninBox'>
                <h2>Sign into Kazerian Box</h2>
                <LoginInput placeholderText='Email Address' userFocus={() => {}} name='userEmail' inputfeild={userEmail} inputfeildSetter={setUserEmail} inputType='email'></LoginInput>
                <LoginInput placeholderText='Password' userFocus={userEntryFocus} name='userEmail' inputfeild={password} inputfeildSetter={setPassword} inputType='password'></LoginInput>
                <LoginInput placeholderText='Verify Password' userFocus={userEntryFocus} name='userEmail' inputfeild={confirmPass} inputfeildSetter={setConfirmPass} inputType='password'></LoginInput>
                <p className='errorMsg' ref={errorMsgRef} > Password do not match, Please try again.</p>
                <LoginFormButton loginFormBtnHandler={signInfunction}>Sign In</LoginFormButton>
                <p> back to <u className='LoginLink' onClick={props.showLoginBox}>Login.</u></p>
                <p className='LoginDisclaimer'>Create account for extra security with kazerian love.</p>
            </div>
        </WhiteBox>
    )

}

export default withRouter(SigninBox);