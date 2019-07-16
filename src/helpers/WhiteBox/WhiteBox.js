import React from "react";
import './WhiteBox.css'

const WhiteBox = (props) =>{
    return (
        <div className="WhiteBox">
            {props.children}
        </div>
    )
}

export default WhiteBox;