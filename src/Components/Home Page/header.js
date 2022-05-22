import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton';
import style from './homepage.css';

const Header = () => {

    const { user } = useAuth0();

    return(
        <div class="container">
        <div class="row">
            <div class="col-sm">Search Bar</div>
            <div class="col-sm"> { user == null && <LoginButton />} </div>
            <div class="col-sm">
                <p className='btn btn-primary'><Link style={{color: 'white'}} to='/profile/'>My Profile</Link></p>
            </div>
        </div>
    </div>
    )
}

export default Header;
