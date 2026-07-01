import React from 'react';
import './OtherCities.css';

// OtherCities component - shows weather for other cities
function OtherCities({ cities, onCityClick }) {
    return (
        <div className="other-cities-section">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="section-title mb-0">Other Cities</h6>
                <span className="show-all-link">Show All</span>
            </div>
            <div className="row g-3">
                {cities.map((city, index) => (
                    <div className="col-6" key={index}>
                        <div
                            className="city-card"
                            onClick={() => onCityClick(city.city)}
                            title={`View ${city.city} weather`}
                        >
                            <h3 className="city-temp">{city.temperature}°</h3>
                            <p className="city-name">{city.city}</p>
                            <p className="city-country">{city.country}</p>
                            <i className={`fa-solid ${city.icon} city-icon`}></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OtherCities;
