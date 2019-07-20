import React from 'react';
import './SideBar.css';

const SideBar = () =>{
    return(
        <div className='SideBar'>
           <div>
                <div className='SideBarHead'>
                        <p>Home</p>
                </div>
                <div className='SideBarContent'>
                    <p>My File</p>
                    <p>Faveriute</p>
                    <p>Sharing</p>
                    <p>Downloded</p>
                </div>
           </div>
        </div>
    )
}

export default SideBar;