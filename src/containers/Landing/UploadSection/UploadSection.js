import React from "react"
import "./UploadSection.css"
import Box from "../../../components/Box/Box"
import UploadContent from "../../../components/UploadContent/UploadContent"
import TopContributer from "../../../components/TopContibuter/TopContributer"

const uploadSection = (props) =>{
    return(
        <div className="UploadSection">
            <h5 className="Content-Heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel tincidunt velit. Praeseque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</h5>
            <Box> 
                <UploadContent></UploadContent>
            </Box>
            <TopContributer></TopContributer>
        </div>
    );
}

export default uploadSection;