import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../Home Page/header';
import ListingPageContactInfo from '../Listing Page/listingpagecontactinfo';
import PostListing from './postlisting';
import MyListings from './mylistings';

const ProfilePage = () => {
    return(
        <div className='profile-page'>
            <Header/>
            <div className='row'>
                <div className='col-sm-6'><ListingPageContactInfo/></div>
                <div className='col-sm-6'><MyListings/></div>
            </div>
            <PostListing/>
        </div>
    );
};

export default ProfilePage;