import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react'

const DropdownFilters = () => {
    
    const [isActive, setIsActive] = useState(false);
  
    return (
        <div className='filters-btn-group'>
            <h3>Filters</h3>

            <h6>Brands</h6>
            <div className='brands-btn-group'>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>Ford</button>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>Chevy</button>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>Toyota</button>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>Tesla</button>
            </div>

            <h6>Type</h6>
            <div className='tpyes-btn-group'>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>Car</button>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>Truck</button>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>SUV</button>
            </div>

            <h6>Color</h6>
            <div className='colors-btn-group'>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>Black</button>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>Blue</button>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>Silver</button>
            </div>

            <h6>Year</h6>
            <div className='years-btn-group'>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>1990-2000</button>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>2000-2010</button>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>2010-2020</button>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>2020-Present</button>
            </div>

            <h6>Miles</h6>
            <div className='miles-btn-group'>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>25,000-50,000</button>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>50,000-75,000</button>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>75,000-100,000</button>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>100,000+</button>
            </div>

            <h6>Price</h6>
            <div className='prices-btn-group'>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>$10,000-$20,000</button>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>$20,000-$30,000</button>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>$30,000-$40,000</button>
            </div>

            <h6>Condition</h6>
            <div className='Condition'>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>Excellent</button>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>Alright</button>
                <button type='button' className='btn-primary' data-toggle='button' aria-pressed='false' aria-autocomplete='off'>Poor</button>
            </div>
        </div>
    );
  };

  export default DropdownFilters;