import React, {Fragment, useRef} from "react";
import "./BorderButton.css";

const BorderButton = (props) => {
    const inputRef = useRef(null);
    const selectFile = (e) =>{
        inputRef.current.click();
    }
    return(
        <Fragment>
            <button className="BorderButton" onClick={selectFile}>{props.children}</button>
            {props.inputType === 'file' ? (<input type={props.inputType} className="FileInput" name="name" ref={inputRef}/>) : null }
        </Fragment>
    );
}

export default BorderButton;