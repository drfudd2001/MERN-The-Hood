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
            <div className='header-buffer'></div>
            <div className='row'>
                <div className='col-sm-1'></div>
                <div className='col-sm-4'><ListingPageContactInfo/></div>
                <div className='col-sm-2'></div>
                <div className='col-sm-4'><MyListings/></div>
                <div className='col-sm-1'></div>
            </div>
            <div className='post-listing-buffer'></div>
                <PostListing/>
        </div>
    );
};

export default ProfilePage;