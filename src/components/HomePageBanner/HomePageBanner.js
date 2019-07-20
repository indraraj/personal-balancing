import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import BannerImage from '../../assets/home-page-banner-v2.png';
import './HomePageBanner.css';

const HomePageBanner = () =>{
    return(
        <div className='welcome-banner'>
                            <div>
                            <FontAwesomeIcon icon={faTimes} className='faTimes' />
                            <div className='banner-content'>
                                <div className='banner-text'>
                                    <h3>
                                        Use Kazerian Box to share with anyone. 
                                    </h3>
                                    <p>Kazerian Box helps you to share and make your work more visible to society.</p>
                                    <button>Share</button>
                                </div>
                                <div className='banner-image'>
                                    <img src={BannerImage} alt='banner'></img>   
                                </div>
                            </div>
                            </div>
                        </div>
    )

}

export default HomePageBanner;