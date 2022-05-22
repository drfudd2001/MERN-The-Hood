import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import style from './profilepage.css';

const MyListings = () => {
    return(
        <div class="my-listings" href="">
        <div class="listing-url">picture goes here</div>
        <div class="my-listing-info">
            <p class="car-info">Brand:</p>
            <p class="car-info">Model:</p>
            <p class="car-info">Year:</p>
            <p class="car-info">Price:</p>
        </div>
    </div>
    );
};

export default MyListings;