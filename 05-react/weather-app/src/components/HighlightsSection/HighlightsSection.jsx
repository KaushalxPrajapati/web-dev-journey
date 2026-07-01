import React from 'react';
import './HighlightsSection.css';

// HighlightsSection component - shows today's weather highlights
function HighlightsSection({ weather }) {
    // Create an array of highlight cards data
    const highlights = [
        {
            title: 'Chance of Rain',
            value: weather.rainChance + '%',
            icon: 'fa-umbrella',
            color: '#60a5fa',
        },
        {
            title: 'UV Index',
            value: weather.uvIndex,
            icon: 'fa-sun',
            color: '#fbbf24',
            label: weather.uvIndex <= 3 ? 'Low' : weather.uvIndex <= 6 ? 'Moderate' : 'High',
        },
        {
            title: 'Wind Status',
            value: weather.wind + ' km/h',
            icon: 'fa-wind',
            color: '#34d399',
        },
        {
            title: 'Humidity',
            value: weather.humidity + '%',
            icon: 'fa-droplet',
            color: '#a78bfa',
        },
    ];

    return (
        <div className="highlights-section">
            <h6 className="section-title">Today Highlight</h6>
            <div className="row g-3">
                {highlights.map((item, index) => (
                    <div className="col-6" key={index}>
                        <div className="highlight-card h-100 d-flex flex-column justify-content-between">
                            <p className="highlight-title">{item.title}</p>
                            <div className="mt-auto">
                                <div className="d-flex align-items-center justify-content-between">
                                    <i
                                        className={`fa-solid ${item.icon} highlight-icon`}
                                        style={{ color: item.color }}
                                    ></i>
                                    <span className="highlight-value">{item.value}</span>
                                </div>
                                <div className="text-end highlight-label-wrapper">
                                    {item.label ? (
                                        <span className="highlight-label">{item.label}</span>
                                    ) : (
                                        <span className="highlight-label invisible">&nbsp;</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HighlightsSection;
