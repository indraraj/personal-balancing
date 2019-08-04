import React from 'react';
import './LoginInput.css'

const LoginInput = (props) =>{
    const handleChange = (e) =>{
        props.inputfeildSetter(e.target.value);
    }
return(
    <input className='LoginInput' name={props.name} onFocus={props.userFocus} onChange={handleChange} value={props.inputfeild} placeholder={props.placeholderText} type={props.inputType}></input>
)
}

export default LoginInput;