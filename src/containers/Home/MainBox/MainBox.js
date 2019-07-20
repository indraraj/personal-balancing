import React from 'react';
import PageHeader from '../containers/PageHeader/PageHeader';
import ActionMenu from '../../../components/ActionMenu/ActionMenu';
import HomePageBanner from '../../../components/HomePageBanner/HomePageBanner';
import './MainBox.css'

const MainBox = () =>{
    return(
        <div className='MainBox'> 
            <PageHeader></PageHeader>
            <ActionMenu></ActionMenu>
            <div className='ContentBox'>
                <div className='HomeContent'>
                    <div>
                        <div className='page-welcome'>
                            <h2><span>Welcome back, indra raj!</span></h2>
                        </div>
                        <HomePageBanner></HomePageBanner>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default MainBox;