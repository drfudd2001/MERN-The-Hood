import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {Link} from 'react-router-dom'

const Listings = ({carObject}) => {




    /**
     * In props we will get the following:
     * 
     * make = string - required
     * model = string - required
     * year = number - required
     * color = string
     * milage = number
     * condition = number
     * imageurl = string
     * 
     * userId = object, user OBJ that posted it
     */


    return(
        <div className="listings border border-primary border-rounded" href="">
            <div className="listing-url">{carObject.imageUrl}</div>
            <div className="listing-info">
                <p className="car-info">Brand: {carObject.make}</p>
                <p className="car-info">Model: {carObject.model}</p>
                <p className="car-info">Year: {carObject.year}</p>
                <p className="car-info">Price: {carObject.price}</p>
                <p className='car-info'>User: <Link to={`/profile/${carObject.userId._id}`}>{carObject.userId.name}</Link></p>
            </div>
        </div>
    );
};

export default Listings;