import React, {Fragment} from "react";
import "./BorderButton.css";

const borderButton = (props) => {
    let inputRef = null;
    const selectFile = (e) =>{
        inputRef.click();
    }
    return(
        <Fragment>
            <button className="BorderButton" onClick={selectFile}>{props.children}</button>
            {props.inputType === 'file' ? (<input type={props.inputType} className="FileInput" name="name" ref={(input) => inputRef = input}/>) : null }
        </Fragment>
    );
}

export default borderButton;