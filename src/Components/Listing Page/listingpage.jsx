import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../Home Page/header';
import ListingPageInfo from './listingpageinfo';
import ListingPagePictures from './listingpagepictures'

if ( car!= null && carData == {} || carData == null) {
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

    const ListingPage = () => {
    return (
        <div>
        <div>
        <Header/>
        <ListingPagePictures/>
        <ListingPageInfo/>
        <ListingPageExtraInfo/>
        <ListingPageContactInfo/>
        </div>
        <div>
            <p>You have no current car listings! Click here:</p>
            <button id='finishCarBtn' className='btn btn-success rounded' onClick={() => setShowForm(true)}>Finish!</button>

            {
                showForm &&
                <div id='overlay' style={overlayStyles}></div>
            }
            {
                showForm &&
                <dialog id='window' className='rounded' style={windowStyles}>
                    <form className='m-auto text-center font-size-3 justify-content-evenly' method='POST' action={`http://tailgater-api.herokuapp.com/cars/`}>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputMake">Make</label>
                                <input type="text" class="form-control" id="inputMake" name='make' placeholder="Make" required/>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputModel">Model</label>
                                <input type="text" class="form-control" id="inputModel" name='phone' placeholder="Model" required/>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="year">Year</label>
                                <input type="number" className="form-control" id="inputYear" name='year' required />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputColor">Color</label>
                                <input type="text" class="form-control" id="inputColor" name='color' placeholder="color" />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="milege">Mileage</label>
                                <input type="number" class="form-control" id="inputMileage" name='mileage' placeholder="0" />
                            </div>
                        </div>
                        <div class="form-row">    
                            <div class="form-group col-md-4">
                                <label for="">Condition</label>
                                <input type="range" class="custom-range" min="" max="3" id="inputCondition" name="condition"></input>
                            </div>
                        </div>

                        <input type='submit' value='Submit Listing' className='btn btn-success my-2 mx-2 m-auto' />
                    </form>
                </dialog>    
            }
        </div>
    </div>
    )
}}

export default ListingPage