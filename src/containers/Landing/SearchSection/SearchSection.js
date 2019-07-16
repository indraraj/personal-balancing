import React from "react"
import "./SearchSection.css"
import SearchBox from "../../../components/SearchBox/SearchBox"
import TopTrends from "../../../components/TopTrends/TopTrends"

const searchSection = (props) =>{
    return(
        <div className={props.searchSectionStatus ? "SearchSectionTransition":"SearchSection"}>
            <div>
                <SearchBox searchSectionHandler={props.searchSectionHandler}></SearchBox>
                <TopTrends></TopTrends>
            </div>
          
        </div>
    );
}

export default searchSection;