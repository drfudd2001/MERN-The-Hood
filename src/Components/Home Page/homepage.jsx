import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './header';
import DropdownFilters from './dropdownfilters';
import ListingsGallery from './listingGallery';

const HomePage = () => {
    return(
        <div>
           <div><Header/></div> 
           <div className="row">
                <div className="col-sm-3"><DropdownFilters/></div>
                <div className='col-sm-8'><ListingsGallery/></div>
            </div> 
        </div>
    )
}

export default HomePage;