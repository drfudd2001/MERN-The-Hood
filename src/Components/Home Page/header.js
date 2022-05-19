import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
    return(
        <nav>
        <ul>
            <li>Search Bar</li>
            <li>
                <a href="login.html">Login</a>
            </li>
            <li>
                <a href="signup.hmtl">Sign Up</a>
            </li>
            <li>
                <a href="profile.html">Profile</a>
            </li>
        </ul>
    </nav>
    )
}

export default Header;