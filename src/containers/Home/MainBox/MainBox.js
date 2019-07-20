import React, { useRef} from 'react';
import PageHeader from '../containers/PageHeader/PageHeader';
import ActionMenu from '../../../components/ActionMenu/ActionMenu';
import HomePageBanner from '../../../components/HomePageBanner/HomePageBanner';
import SectionHeading from '../containers/SectionHeading/SectionHeading';
import './MainBox.css'

const MainBox = () =>{
    const suggestionRef = useRef(null);
    const starredRef = useRef(null);
    const recentRef = useRef(null);

    const hideSuggectionSection = () =>{
        suggestionRef.current.style.display = 'none';
    }
    const hidestarredRef = () =>{
        starredRef.current.style.display = 'none';
    }
    const hideRecentRef = () =>{
        recentRef.current.style.display = 'none';
    }
    return(
        <div className='MainBox'> 
            <PageHeader></PageHeader>
            <ActionMenu></ActionMenu>
            <div className='ContentBox'>
                <div className='HomeContent'>
                    <div>
                        <div>
                            <SectionHeading hideSection={() => {}} showHide={false}>Welcome back, indra raj!</SectionHeading>
                            <HomePageBanner></HomePageBanner>
                        </div>
                        <div ref={suggestionRef}>
                            <SectionHeading hideSection={hideSuggectionSection} showHide={true}>Suggested for you</SectionHeading>
                            <div>
                                <p>As you use Dropbox, suggested items will automatically show up here. <u>Learn more</u></p>
                            </div>
                        </div>
                        <div ref={starredRef}>
                            <SectionHeading hideSection={hidestarredRef} showHide={true}>Starred</SectionHeading>
                            <div>
                                <p>When you star items, they’ll show up here for easy access. <u>Learn more</u></p>
                            </div>
                        </div>
                        <div ref={recentRef}>
                        <SectionHeading hideSection={hideRecentRef} showHide={true}>Recent</SectionHeading>
                        <div>
                            <p>hey</p>
                            <p>hey</p>
                        </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default MainBox;