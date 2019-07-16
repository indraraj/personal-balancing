import React from 'react';
import './LoginInput.css'

const LoginInput = (props) =>{
return(
    <input className='LoginInput' placeholder={props.placeholderText} type={props.inputType}></input>
)
}

export default LoginInput;