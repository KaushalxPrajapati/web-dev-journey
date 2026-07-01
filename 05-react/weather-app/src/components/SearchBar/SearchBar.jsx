import React, { useState } from 'react';
import './SearchBar.css';

// List of cities to show as quick-select buttons
const cityOptions = ['Jamshedpur', 'Delhi', 'Dubai', 'New York', 'Toronto', 'Beijing'];

// SearchBar component - search input + city buttons
function SearchBar({ onSearch, isLoading, currentCity }) {
    const [cityInput, setCityInput] = useState('');

    // Handle form submit
    function handleSubmit(e) {
        e.preventDefault();
        if (cityInput.trim() === '') return;
        onSearch(cityInput.trim());
    }

    // Handle clicking a city button
    function handleCityClick(cityName) {
        setCityInput(cityName);
        onSearch(cityName);
    }

    return (
        <div className="search-wrapper">
            {/* Search input */}
            <form className="search-bar d-flex" onSubmit={handleSubmit}>
                <div className="search-input-wrapper">
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    <input
                        type="text"
                        id="city-search-input"
                        name="city"
                        className="search-input"
                        placeholder="Search city..."
                        value={cityInput}
                        onChange={(e) => setCityInput(e.target.value)}
                        disabled={isLoading}
                    />
                </div>
                <button type="submit" className="search-btn" disabled={isLoading}>
                    {isLoading ? (
                        <i className="fa-solid fa-spinner fa-spin"></i>
                    ) : (
                        <i className="fa-solid fa-magnifying-glass"></i>
                    )}
                </button>
            </form>

            {/* Quick city select buttons */}
            <div className="city-options">
                {cityOptions.map((city) => (
                    <button
                        key={city}
                        className={`city-option-btn ${
                            currentCity?.toLowerCase() === city.toLowerCase() ? 'active' : ''
                        }`}
                        onClick={() => handleCityClick(city)}
                        disabled={isLoading}
                    >
                        {city}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SearchBar;
