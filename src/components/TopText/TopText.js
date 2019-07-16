import React from "react";
import { withRouter } from 'react-router-dom';
import "./TopText.css";

const toptext = (props) =>{
    const onLoginClickHandler = () => {
        props.history.push('/login')
    }
    return(
        <h4 className="TopText" onClick={onLoginClickHandler}>{props.children}</h4>
    )
}

export default withRouter(toptext);