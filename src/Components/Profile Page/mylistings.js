import React, {useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import style from './profilepage.css';
import Listings from '../Home Page/listings';
import { useParams } from 'react-router';

const MyListings = () => {

    const [ carObjects, setCarObjects ] = useState([]);
    const params = useParams();
    const { user } = useAuth0();

    const fetchData = async () => {

        const endpoint = params.id != null ? 
            `http://${process.env.API_URL}/cars/mylistings/id/${params.id}` :
            `http://${process.env.API_URL}/cars/mylistings/sub/${user.sub}`;

        const url = endpoint;
        const response = await fetch(url);
        const responseData = await response.json();

        if (responseData == null || !Array.isArray(responseData)) return;
        setCarObjects([...carObjects, ...responseData]);
    }

    const populateData = useEffect(() => {
        fetchData();
    }, [])

    const formatListings = () => {
        return carObjects.length > 0 ?
            carObjects.map( carObject => (<Listings carObject={carObject} />))
            : (<p>No Listings from this user</p>)
    }


    return(
        <div>
            {
                formatListings()
            }
        </div>
    );
};

export default MyListings;