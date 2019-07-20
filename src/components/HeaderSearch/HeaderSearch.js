import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './HeaderSearch.css'

const HeaderSearch = () =>{
    return (
        <div className='HeaderSearch'>
            <FontAwesomeIcon icon={faSearch} className='FaSearch' />
            <input type='text' placeholder='Search'>
                {/* <img className='SearchGlass' src={SearchGlass} alt="Search"></img> */}
            </input>
        </div>
    )
}

export default HeaderSearch;