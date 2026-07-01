import React from 'react';
import './ForecastSection.css';

// ForecastSection component - shows hourly forecast cards
function ForecastSection({ forecast }) {
    return (
        <div className="forecast-section">
            <h6 className="section-title">Today / Week</h6>
            <div className="forecast-cards d-flex">
                {forecast.map((item, index) => (
                    <div className="forecast-card" key={index}>
                        <span className="forecast-time">{item.time}</span>
                        <i className={`fa-solid ${item.icon} forecast-icon`}></i>
                        <span className="forecast-temp">{item.temp}°</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ForecastSection;
