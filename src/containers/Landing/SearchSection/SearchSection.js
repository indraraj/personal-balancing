import React from "react"
import "./SearchSection.css"
import SearchBox from "../../../components/SearchBox/SearchBox"
import TopTrends from "../../../components/TopTrends/TopTrends"

const searchSection = (props) =>{
    return(
        <div className="SearchSection">
            <div>
                <SearchBox></SearchBox>
                <TopTrends></TopTrends>
            </div>
          
        </div>
    );
}

export default searchSection;