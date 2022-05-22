import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton'
import { Link, useParams } from 'react-router-dom';


const ListingPageContactInfo = () => {

    const [ userData, setUserData ] = useState({});
    const { user } = useAuth0();
    const params = useParams();

    const fetchData = async () => {

        if (params.id == null && user == null) return;

        const url = params.id != null ? 
            `http://localhost:3001/users/${params.id}`
            : `http://localhost:3001/users/myprofile/${user.sub || ''}`;
            
        const response = await fetch(url)
        const responseData = await response.json();

        setUserData(responseData);
    }

    const getUserData = useEffect(() => {
        fetchData();

    }, [user]);

    if (user == null || user === {}) return (
        <div>
            <p>Not logged in. Log in to see user data.</p>
            <Link to='/'>Go back</Link>
        </div>
    )

    return(
        <div class="contact-info card">
            
            {
                !userData ||
                userData.error != null &&
                <p>No user with that login!</p>
            }


            <p>Name: {userData.name || 'unnamed'}</p>
            {
                userData.phone &&
                <p>Phone: {userData?.phone}</p>
            }
            {
                userData.state &&
                userData.city &&
                <p>{userData.city}, {userData.state}</p>
            }
            <p>Email: {userData.email || 'no email'}</p>
            
        </div>
    )
}

export default ListingPageContactInfo;