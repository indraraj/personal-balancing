import React from 'react';
import HeaderSearch from '../../../../components/HeaderSearch/HeaderSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import UserImage from '../../../../components/UserImage/UserImage';
import './PageHeader.css';

const PageHeader = () =>{
    return (
        <div className='PageHeader'>
            <h4>Home</h4>
            <div className='RightItems'>
                <HeaderSearch></HeaderSearch>
                <FontAwesomeIcon icon={faBell} className='FaBell' />
                <UserImage></UserImage>
            </div>
        </div>
    )
}

export default PageHeader;