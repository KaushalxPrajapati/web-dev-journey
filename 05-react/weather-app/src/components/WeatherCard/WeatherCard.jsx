import React from 'react';
import './WeatherCard.css';

// WeatherCard component - shows main weather info for the selected city
function WeatherCard({ weather }) {
    // Get current day and date
    const today = new Date();
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
    const dateStr = today.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });

    return (
        <div className="weather-card">
            {/* Top row - location badge */}
            <div className="d-flex justify-content-between align-items-start mb-3">
                <span className="location-badge">
                    <i className="fa-solid fa-location-dot me-1"></i>
                    {weather.city}, {weather.country}
                </span>
            </div>

            {/* Day and date */}
            <h2 className="day-name">{dayName}</h2>
            <p className="date-text">{dateStr}</p>

            {/* Temperature and condition */}
            <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                    <h1 className="temperature">{weather.temperature}°C</h1>
                    <p className="high-low">
                        High: {weather.high}° Low: {weather.low}°
                    </p>
                </div>
                <div className="text-center">
                    <i className={`fa-solid ${weather.icon} weather-main-icon`}></i>
                    <p className="condition-text">{weather.condition}</p>
                    <p className="feels-like">Feels Like {weather.feelsLike}°</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
