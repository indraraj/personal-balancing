import React, { Component } from "react"
import "./Landing.css"
import UploadSection from "./UploadSection/UploadSection"
import SearchSection from "./SearchSection/SearchSection"

class Landing extends Component{
    state = {
        searchSection: false
    }
    showSearchSectionHandler = () => {
        this.setState({searchSection:true})
    }
    render(){
        return(
            <div className="Landing">
                <UploadSection searchSectionStatus={this.state.searchSection}></UploadSection>
                <SearchSection searchSectionHandler={this.showSearchSectionHandler} searchSectionStatus={this.state.searchSection}></SearchSection>
            </div>
        );
    }
}

export default Landing;