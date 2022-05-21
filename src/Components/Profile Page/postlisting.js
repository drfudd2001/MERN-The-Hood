import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const PostListing = () => {
    return(
        <div className="post-listing">
            <button className='post-listing-button'>Post A Listing</button>
        </div>
    );
};

export default PostListing;