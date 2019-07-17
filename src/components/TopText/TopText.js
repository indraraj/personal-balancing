import React, {useContext} from "react";
import { withRouter } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import "./TopText.css";

const Toptext = (props) =>{
    const authContext = useContext(AuthContext);
    const onLoginClickHandler = () => {
        if(props.children === 'Login'){
            props.history.push('/login')
        }else if(props.children === 'Logout'){
            authContext.userLoginHandler();
            props.history.push('/')
        }
    }
    return(
        <h4 className="TopText" onClick={onLoginClickHandler}>{props.children}</h4>
    )
}

export default withRouter(Toptext);