import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './header';
import ListingPageInfo from './listingpageinfo';
import ListingPagePictures from './listingpagepictures'

const ListingPage = () => {
    return(
        <div>
            <Header/>
            <ListingPagePictures/>
            <ListingPageInfo/>
            <ListingPageExtraInfo/>
            <ListingPageContactInfo/>
        </div>
    )
}

export default ListingPage;