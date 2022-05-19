import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react'

const DropdownFilters = () => {
    
    const [isActive, setIsActive] = useState(false);
  
    return (
        <div className="filter-container">
            <button className="filter-button">Filter</button>
            <nav className={`filter ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li className="filter-types">Brand</li>
                    <li className="filter-types">Model</li>
                    <li className="filter-types">Type</li>
                    <li className="filter-types">Color</li>
                    <li className="filter-types">Year</li>
                    <li className="filter-types">Miles</li>
                    <li className="filter-types">Price</li>
                    <li className="filter-types">Condition</li>
                </ul>
            </nav>
        </div>
    );
  };

  export default DropdownFilters;