import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import style from './profilepage.css';
import { Link } from 'react-router-dom';

const PostListing = () => {
    return(
        <div className="post-listing">
            <Link to='/post/create' className='post-listing-button'>Post A Listing</Link>
        </div>
    );
};

export default PostListing;