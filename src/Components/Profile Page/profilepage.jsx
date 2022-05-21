import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './header';
import ListingPageContactInfo from '../Listing Page/listingpagecontactinfo';

const ProfilePage = () => {
    return(
        <div>
            <Header/>
            <ListingPageContactInfo/>
            <PostListing/>
        </div>
    );
};

export default ProfilePage;