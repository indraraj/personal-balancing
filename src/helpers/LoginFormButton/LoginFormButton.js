import React from 'react';
import './LoginFormButton.css';
const LoginFormButton = (props) =>{
    return (
        <button className='LoginFormButton' onClick={props.loginFormBtnHandler}>{props.children}</button>
    )
}

export default LoginFormButton;