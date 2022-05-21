import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton';

const Header = () => {

    const { user } = useAuth0();

    return(
        <nav>
        <ul>
            <li>Search Bar</li>
            {
                user == null &&
                <li><LoginButton /></li>
            }
            <li>
                <Link to='/profile/a'>Test</Link>
            </li>
        </ul>
    </nav>
    )
}

export default Header;