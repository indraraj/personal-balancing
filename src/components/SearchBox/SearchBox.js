import React from "react"
import "./SearchBox.css"

const searchBox = (props) =>{
    return(
        <input className="Searchbox" placeholder="Search document" onClick={() => props.searchSectionHandler()}></input>
    );
};

export default searchBox;