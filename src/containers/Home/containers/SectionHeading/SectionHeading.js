import React from 'react';
import './SectionHeading.css';

const SectionHeading = (props) =>{
    return(
        <div className='page-welcome'>
            <h2><span>{props.children}</span><span onClick={props.hideSection} style={props.showHide ? {display: `static`} : {display: `none`}} className='hide-section'>Hide</span></h2>
        </div>
    )

}

export default SectionHeading;