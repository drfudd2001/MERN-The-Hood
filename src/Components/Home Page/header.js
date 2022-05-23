import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import style from './homepage.css';

const Header = () => {

    const { user } = useAuth0();

    return(
        <div class="header-container">
        <div class="row">
            <div class="col-sm" id="header-row">Insert Searchbar Here</div>
            <div class="col-sm" id='header-row'>
                {
                    user == null &&
                    <LoginButton />
                }
                {
                    user != null &&
                    <p className='btn btn-primary' id='header-row'><Link to='/' style={{color: 'white'}}>Home Page</Link></p>
                }
            </div>
            <div class="col-sm" id="header-row">
                {
                    user != null &&
                    <div>
                        <p className='btn btn-primary' id="header-row"><Link style={{color: 'white'}} to='/profile/'>My Profile</Link></p>
                        <LogoutButton />
                    </div>
                }
            </div>
        </div>
    </div>
    )
}

export default Header;
