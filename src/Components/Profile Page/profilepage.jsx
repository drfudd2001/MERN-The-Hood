import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../Home Page/header';
import ListingPageContactInfo from '../Listing Page/listingpagecontactinfo';
import PostListing from './postlisting';

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