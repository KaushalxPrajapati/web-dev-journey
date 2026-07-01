import React from 'react';
import './SunriseCard.css';

// SunriseCard component - shows sunrise, sunset, and day length
function SunriseCard({ sunrise, sunset, dayLength }) {
    return (
        <div className="sunrise-card">
            {/* Sunrise */}
            <div className="sunrise-block">
                <span className="sunrise-label">Sunrise</span>
                <div className="sunrise-time-row">
                    <i className="fa-solid fa-sun sunrise-icon me-2"></i>
                    <span className="sunrise-time">{sunrise}</span>
                </div>
            </div>

            {/* Sunset */}
            <div className="sunrise-block">
                <span className="sunrise-label">Sunset</span>
                <div className="sunrise-time-row">
                    <i className="fa-solid fa-moon sunset-icon me-2"></i>
                    <span className="sunrise-time">{sunset}</span>
                </div>
            </div>

            {/* Day Length */}
            <div className="sunrise-block">
                <span className="sunrise-label">Length of day</span>
                <div className="day-length">{dayLength}</div>
            </div>
        </div>
    );
}

export default SunriseCard;
