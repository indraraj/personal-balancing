import React from "react"
import "./BorderButton.css"

const borderButton = (props) => {
    return(
        <button className="BorderButton">{props.children}</button>
    );
}

export default borderButton;