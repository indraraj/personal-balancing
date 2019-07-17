import React, { Component} from 'react';
import AuthContext from '../../context/auth-context';

class Home extends Component{
    static contextType = AuthContext;
    componentDidMount(){
        if(!this.context.loginState){
            this.props.history.push('/');
        }
    }
    render(){
        return(
            <p>Home</p>
        )
    }
}

export default Home;