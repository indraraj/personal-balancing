import React from 'react';
import UserPic from '../../assets/user_profile2.jpg';
import './UserImage.css' 

const UserImage = () =>{
    return(
        <img className='UserPic' src={UserPic} alt='userimage'></img>
    )
}

export default UserImage;