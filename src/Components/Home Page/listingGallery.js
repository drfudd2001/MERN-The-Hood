import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Listings from './listings';
import style from './homepage.css';

const ListingsGallery = () => {


    const [ viewedCars, setViewedCars ] = useState(0);
    const [ carObjects, setCarObjects ] = useState([]);

    const [ loadMoreVisibile, setLoadMoreVisible ] = useState(false);

    const fetchData = async () => {
        const url = `http://localhost:3001/cars/${viewedCars}/10`;
        const response = await fetch(url);
        const responseData = await response.json();

        if (responseData == null || !Array.isArray(responseData)) return;

        if (responseData.length >= 10) setLoadMoreVisible(true);
        else setLoadMoreVisible(false);

        setViewedCars(viewedCars + responseData.length);
        setCarObjects([...carObjects, ...responseData]);
    }

    const paginate = useEffect(() => {
        fetchData();
    }, [])

    const formatListings = carObjects.map( carObject => {

        return (<Listings carObject={carObject} />)

    })


    return(
        <div className='homepage-listings card'>

            {formatListings}

            {
                loadMoreVisibile &&
                <button>Load more!</button> 
                //This will call paginate useEffect
            }
        </div>
    );
};

export default ListingsGallery ;