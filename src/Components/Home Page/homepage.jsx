import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './header';
import DropdownFilters from './dropdownfilters';
import ListingsGallery from './listingGallery';

const HomePage = () => {
    return(
        <div>
            <Header/>
            <DropdownFilters/>
            <ListingsGallery/>
        </div>
    )
}

export default HomePage;