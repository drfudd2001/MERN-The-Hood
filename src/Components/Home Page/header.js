import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
    return(
        <div class="container">
        <div class="row">
            <div class="col-sm">Search Bar</div>
            <div class="col-sm">
                <button type="button" class="btn btn-primary"><a href="login.html">Login</a></button>
            </div>
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