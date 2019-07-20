import React, { Component} from 'react';
import './Home.css'
import AuthContext from '../../context/auth-context';
import MainBox from './MainBox/MainBox';
import SideBar from './SideBar/SideBar';

class Home extends Component{
    static contextType = AuthContext;
    // componentDidMount(){
    //     if(!this.context.loginState){
    //         this.props.history.push('/');
    //     }
    // }
    render(){
        return(
            <div className='Home'>
                <SideBar></SideBar>
                <MainBox></MainBox>
            </div>
        )
    }
}

export default Home;