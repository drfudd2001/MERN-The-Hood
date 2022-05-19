import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import HomePage from './Components/Home Page/homepage';

function DropdownFilters() => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
  
    return (
        <div className="filter-container">
            <button onClick={onClick} className="filter-button">Filter</button>
            <nav ref={dropdownRef} className={'filter ${isActive ? 'active' : 'inactive'}'}>
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
        </div>
    );
  };

  export default DropdownFilters;