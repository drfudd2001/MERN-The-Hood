import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Listings from './listings';

const ListingsGallery = () => {
    return(
        <div className='homepage-listings card'> Iterator for Listings will be added here
            <Listings/>
        </div>
    );
};

export default ListingsGallery ;