import React from "react"
import UploadLogo from "../../assets/drop.png"
import "./UploadContent.css"
import BorderButton from "../../helpers/BorderButton/BorderButton"

const uploadContent =(props) => {
    return(
        <div className="UploadContent">
            <img className="Upload-Image" src={UploadLogo} alt="Upload File"/>
            <h2>Drag & Drop file here</h2>
            <h4>or</h4>
            <BorderButton>Browse Files</BorderButton>
        </div>
    );
}

export default uploadContent;