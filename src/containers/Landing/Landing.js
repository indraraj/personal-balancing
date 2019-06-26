import React, { Component } from "react"
import "./Landing.css"
import UploadSection from "./UploadSection/UploadSection"
import SearchSection from "./SearchSection/SearchSection"

class Landing extends Component{
    render(){
        return(
            <div className="Landing">
                <UploadSection></UploadSection>
                <SearchSection></SearchSection>
            </div>
        );
    }
}

export default Landing;