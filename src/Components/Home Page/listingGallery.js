import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Listings from './listings';
import style from './homepage.css';

const ListingsGallery = () => {


    const [ viewedCars, setViewedCars ] = useState(0);
    const [ carObjects, setCarObjects ] = useState([]);

    const [ loadMoreVisibile, setLoadMoreVisible ] = useState(false);
    const [ buttonToggle, setButtonToggle ] = useState(false);

    const fetchData = async () => {

        const maxResults = 5


        const url = `http://localhost:3001/cars/${viewedCars}/${maxResults}`;
        const response = await fetch(url);
        const responseData = await response.json();

        if (responseData == null || !Array.isArray(responseData)) return;

        if (responseData.length >= maxResults) setLoadMoreVisible(true);
        else setLoadMoreVisible(false);

        setViewedCars(viewedCars + responseData.length);
        setCarObjects([...carObjects, ...responseData]);
    }

    const loadData = useEffect(()=> { fetchData() }, []);

    const paginate = useEffect(() => {
        fetchData();
    }, [buttonToggle])

    const formatListings = carObjects.map( carObject => {

        return (<Listings carObject={carObject} />)

    })


    return(
        <div className='homepage-listings card'>

            {formatListings}

            {
                loadMoreVisibile &&
                <button onClick={() => setButtonToggle(!buttonToggle)}>Load more!</button> 
                //This will call paginate useEffect
            }
        </div>
    );
};

export default ListingsGallery ;