import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ListingPageContactInfo = () => {
    return(
        <div class="contact-info">
        <p>Name: Random Name</p>
        <p>Phone: ###-###-####</p>
        <p>Email: email@email.com</p>
        <p>City, Sate</p>

    </div>
    )
}

export default ListingPageContactInfo;