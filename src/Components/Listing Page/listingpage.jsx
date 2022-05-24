import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../Home Page/header';
import ListingPageInfo from './listingpageinfo';
import ListingPagePictures from './listingpagepictures'

const ListingPage = () => {
    const { user } = useAuth0();
    return (
        <div>
            <p>Create your car listing here!</p>
                    <form className='m-auto text-center font-size-3 justify-content-evenly' method='POST' action='https://tailgater-api.herokuapp.com/cars/'>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputMake">Make</label>
                                <input type="text" class="form-control" id="inputMake" name='make' placeholder="Make" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputModel">Model</label>
                                <input type="text" class="form-control" id="inputModel" name='model' placeholder="Model"  />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="year">Year</label>
                                <input type="number" min="1901" max="2023" className="form-control" id="inputYear" name='year' placeholder="Year" />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputColor">Color</label>
                                <input type="text" class="form-control" id="inputColor" name='color' placeholder="Color" />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="milege">Mileage</label>
                                <input type="number" class="form-control" id="inputMileage" name='mileage' placeholder="0" />
                            </div>
                        </div>
                        <div class="form-row">    
                            <div class="form-group col-md-4">
                                <label for="condition">Condition</label>
                                <p>Clunker Fair Good Excellent</p>
                                <input type="range" class="custom-range" min="" max="3" id="inputCondition" name="condition"></input>
                            </div>
                        </div>

                        <input type='submit' value='Submit Listing' className='btn btn-success my-2 mx-2 m-auto' />
                        {/* Hidden needed values: */}
                        <input value={window.location.origin+"/profile/"} id='redirect' name='redirect' type='hidden' />
                        <input value={user.sub} id='userLogin' name='userLoginId' type='hidden' />
                    </form> 
        </div>
    )
}

export default ListingPage