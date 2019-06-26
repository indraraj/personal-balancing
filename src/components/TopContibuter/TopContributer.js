import React from "react"
import "./TopContributer.css"
import UserProfile from "../UserProfile/UserProfile"

const topContributer = (props) =>{
    var userList = [1,2,3];
    return(
        <div className="TopContibuter">
            <h4>Hero Contibuter</h4>
            <div className="UserList">
            {userList.map(e =>{
                    console.log('user',e);
                    return  (<UserProfile key={`user${e}`} user={e}></UserProfile>)
            })}
            </div>
        </div>
    )
}

export default topContributer;
