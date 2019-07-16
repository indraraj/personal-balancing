import React from 'react';
import './LoginFormButton.css';
const LoginFormButton = (props) =>{
    return (
        <button className='LoginFormButton'>{props.children}</button>
    )
}

export default LoginFormButton;