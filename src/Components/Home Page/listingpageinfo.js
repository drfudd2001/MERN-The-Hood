import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ListingPageInfo = () => {
    return(
    <div class="listingpage-info">
        <h1>Veichle Information</h1>
        <p>Brand: Ford</p>
        <p>Type: Truck</p>
        <p>Model: Bronco</p>
        <p>Year: 2022</p>
        <p>Price: $60,000</p>
        <p>Color: Black</p>
        <p>Milage: 30,000</p>
        <p>Condition: Good</p>
    </div>
    )
}

export default ListingPageInfo ;