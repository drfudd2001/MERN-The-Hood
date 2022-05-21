import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton';

const Header = () => {

    const { user } = useAuth0();

    return(
        <div class="container">
        <div class="row">
            <div class="col-sm">Search Bar</div>
            <div class="col-sm btn btn-primary" { user == null && <LoginButton />}></div>
            <div class="col-sm">
                <button type="button" class="btn btn-primary"><a href="signup.hmtl">Sign Up</a></button>
            </div>
            <div class="col-sm">
                <button type="button" class="btn btn-primary"><a href="profile.html">Profile</a></button>
            </div>
        </div>
    </div>
    )
}

export default Header;
