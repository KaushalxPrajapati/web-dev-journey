import React, { useState, useEffect } from 'react';
import './Sidebar.css';

// Sidebar component - shows navigation icons on the left
function Sidebar() {
    const [activeTab, setActiveTab] = useState('home');

    useEffect(() => {
        let tooltipList = [];
        let timeoutId;

        const initTooltips = () => {
            if (window.bootstrap) {
                const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
                tooltipList = [...tooltipTriggerList].map(
                    (tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl)
                );
            } else {
                timeoutId = setTimeout(initTooltips, 100);
            }
        };

        initTooltips();

        return () => {
            clearTimeout(timeoutId);
            tooltipList.forEach((t) => t.dispose());
        };
    }, []);

    return (
        <div className="sidebar d-flex flex-column align-items-center py-3">
            <div
                className={`sidebar-icon ${activeTab === 'home' ? 'active' : ''}`}
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Home"
                onClick={() => setActiveTab('home')}
            >
                <i className="fa-solid fa-house"></i>
            </div>
            <div
                className={`sidebar-icon ${activeTab === 'search' ? 'active' : ''}`}
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Search"
                onClick={() => setActiveTab('search')}
            >
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div
                className={`sidebar-icon ${activeTab === 'location' ? 'active' : ''}`}
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Location"
                onClick={() => setActiveTab('location')}
            >
                <i className="fa-solid fa-location-dot"></i>
            </div>
            <div
                className={`sidebar-icon ${activeTab === 'calendar' ? 'active' : ''}`}
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Calendar"
                onClick={() => setActiveTab('calendar')}
            >
                <i className="fa-solid fa-calendar-days"></i>
            </div>
            <div
                className={`sidebar-icon ${activeTab === 'charts' ? 'active' : ''}`}
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Charts"
                onClick={() => setActiveTab('charts')}
            >
                <i className="fa-solid fa-chart-pie"></i>
            </div>

            {/* Spacer to push settings to bottom */}
            <div className="mt-auto">
                <div
                    className={`sidebar-icon ${activeTab === 'settings' ? 'active' : ''}`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Settings"
                    onClick={() => setActiveTab('settings')}
                >
                    <i className="fa-solid fa-gear"></i>
                </div>
                <div className="sidebar-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="Logout">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
