import React from "react"
import "./UserProfile.css"
import userImage1 from "../../assets/profile_user1.jpg"
// import userImage2 from "../../assets/user_profile2.jpg"
// import userImage3 from "../../assets/user_profile3.jpg"

const userProfile = (props) =>{
    return(
        <div className="UserProfile">
            <img src={userImage1} className="UserImage" alt="user_image"></img>
            <p>{`User ${props.user}`}</p>
        </div>
    )
}

export default userProfile;