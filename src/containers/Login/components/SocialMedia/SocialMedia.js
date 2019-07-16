import React from "react";
import './SocialMedia.css';
import GoogleIcon from '../../../../assets/google.png';
import FacebookIcon from '../../../../assets/Facebook.png'

const SocialMedia = (props) => {
    return (
        <div className="SocialMedia">
            <img src={GoogleIcon} alt="google"></img>
            <img src={FacebookIcon} alt="facebook"></img>
        </div>
    )
}

export default SocialMedia;