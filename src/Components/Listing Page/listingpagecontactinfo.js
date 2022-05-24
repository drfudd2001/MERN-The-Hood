import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton'
import { Link, useParams } from 'react-router-dom';


const ListingPageContactInfo = () => {

    // User data & user data from Auth0
    const [ userData, setUserData ] = useState({});
    const { user } = useAuth0();

    // If we need to show the form to the user, change this value:
    const [ showForm, setShowForm ] = useState(false);

    // Params
    const params = useParams();

    // Fetch our data from our backend
    const fetchData = async () => {

        if (params.id == null && user == null) return;

        const url = params.id != null ? 
            `http://${process.env.API_URL}/users/${params.id}`
            : `http://${process.env.API_URL}/users/myprofile/${user.sub || ''}`;
            
        const response = await fetch(url)
        const responseData = await response.json();

        setUserData(responseData);
    }
    // Need a use effect here to use an async func
    const getUserData = useEffect(() => {
        fetchData();
    }, [user]);


    // If we have no user or the user is empty, we are not logged in. Don't show any data here
    if (user == null || user === {}) return (
        <div>
            <p>Not logged in. Log in to see user data.</p>
            <Link to='/'>Go back</Link>
        </div>
    )

    // If we are logged in, but the backend doesn't have any data for us, give them a form to submit their data.
    if (user != null && userData == {} || userData == null) {
        const windowStyles = {
            width: '600px',
            margin: '0 25vw',
            position: 'absolute',
            top: '120px',
            boxShadow: '20px 20px 40px 1px #656565',
            zIndex: 999
        }
        const overlayStyles = {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 998,
            background: 'rgba(0,0,0,0.3)'
        }
        return (
            <div>
                <p>You are not finished setting up your profile yet! Click here:</p>
                <button id='finishProfileBtn' className='btn btn-success rounded' onClick={() => setShowForm(true)}>Finish!</button>

                {
                    showForm &&
                    <div id='overlay' style={overlayStyles}></div>
                }
                {
                    showForm &&
                    <dialog id='window' className='rounded' style={windowStyles}>
                        <form className='m-auto text-center font-size-3 justify-content-evenly' method='POST' action={`http://${process.env.API_URL}/users/`}>


                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputName">Name</label>
                                    <input type="text" class="form-control" id="inputName" name='name' placeholder="Name" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputPhone">Phone #</label>
                                    <input type="tel" class="form-control" id="inputPhone" name='phone' placeholder="(555) 555-5555" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputCity">City</label>
                                    <input type="text" class="form-control" name='city' id="inputCity" />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputState">State</label>
                                    <select id="inputState" name='state' class="form-control">
                                        <option selected>WI</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="inputZip">Zip</label>
                                    <input type="text" class="form-control" id="inputZip" />
                                </div>
                            </div>

                            <input type='submit' value='Submit Profile' className='btn btn-success my-2 mx-2 m-auto' />

                            {/* Hidden needed values: */}
                            <input value={window.location.href} id='redirect' name='redirect' type='hidden' />
                            <input value={user.email} id='email' name='email' type='hidden' />
                            <input value={user.sub} id='userLogin' name='userLogin' type='hidden' />
                        </form>
                    </dialog>    
                }
                
            </div>
        )
    }



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