import React, { useState } from 'react';
import './Dashboard.css';

// Import all components
import Sidebar from '../Sidebar/Sidebar';
import SearchBar from '../SearchBar/SearchBar';
import WeatherCard from '../WeatherCard/WeatherCard';
import ForecastSection from '../ForecastSection/ForecastSection';
import HighlightsSection from '../HighlightsSection/HighlightsSection';
import SunriseCard from '../SunriseCard/SunriseCard';
import OtherCities from '../OtherCities/OtherCities';

// Import mock data service
import { getWeatherByCity, getOtherCitiesWeather } from '../../services/weatherApi';

function Dashboard() {
    const [weatherData, setWeatherData] = useState(null);
    const [otherCities, setOtherCities] = useState([]);
    const [error, setError] = useState('');

    // Handle city search (synchronous against the mock DB)
    async function handleSearch(cityName) {
        setError('');

        const result = await getWeatherByCity(cityName);

        if (result.success) {
            setWeatherData(result.data);
            const others = await getOtherCitiesWeather(result.data.city);
            setOtherCities(others);
        } else {
            setError(result.error);
            setWeatherData(null);
            setOtherCities([]);
        }
    }

    // Handle clicking on a city card in the "Other Cities" section
    function handleCityClick(cityName) {
        handleSearch(cityName);
    }

    if (!weatherData) {
        return (
            <div className="dashboard-wrapper">
                <div
                    className="main-content text-center py-5 d-flex flex-column align-items-center justify-content-center"
                    style={{ minHeight: '350px', width: '100%', maxWidth: '500px' }}
                >
                    <SearchBar onSearch={handleSearch} isLoading={false} />
                    {error && (
                        <div className="error-message mt-3 w-100">
                            <i className="fa-solid fa-circle-exclamation me-2"></i>
                            {error}
                        </div>
                    )}
                    {!error && <h5 className="text-white mt-4">Please search for a city to view weather.</h5>}
                </div>
            </div>
        );
    }

    return (
        <div className="dashboard-wrapper">
            <div className="container-fluid px-0">
                <div className="row g-0">
                    {/* Sidebar */}
                    <div className="col-auto sidebar-col">
                        <Sidebar />
                    </div>

                    {/* Main Content */}
                    <div className="col main-content">
                        <div className="row g-3">
                            {/* Left Section - Weather & Forecast */}
                            <div className="col-lg-5 col-md-6 d-flex flex-column">
                                <SearchBar onSearch={handleSearch} isLoading={false} currentCity={weatherData.city} />

                                {/* Error message */}
                                {error && (
                                    <div className="error-message">
                                        <i className="fa-solid fa-circle-exclamation me-2"></i>
                                        {error}
                                    </div>
                                )}

                                <WeatherCard weather={weatherData} />
                                <ForecastSection forecast={weatherData.hourlyForecast} />
                            </div>

                            {/* Right Section - Highlights, Sunrise, Other Cities */}
                            <div className="col-lg-7 col-md-6">
                                <HighlightsSection weather={weatherData} />
                                <div className="row g-3 mt-0">
                                    <div className="col-lg-5 col-md-12 d-flex flex-column">
                                        <SunriseCard
                                            sunrise={weatherData.sunrise}
                                            sunset={weatherData.sunset}
                                            dayLength={weatherData.dayLength}
                                        />
                                    </div>
                                    <div className="col-lg-7 col-md-12 d-flex flex-column">
                                        <OtherCities cities={otherCities} onCityClick={handleCityClick} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
