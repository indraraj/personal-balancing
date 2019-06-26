import React from "react"
import "./TopText.css"

const toptext = (props) =>{
    return(
        <h4 className="TopText">{props.children}</h4>
    )
}

export default toptext;