// Mock weather data service
// Returns static data for the 6 supported cities. No network calls, no API key.
// The shape of each city object matches what the live OpenWeather formatter used to produce
// so the existing components (WeatherCard, HighlightsSection, etc.) don't need changes.

// Static database of cities
const MOCK_DB = {
    Jamshedpur: {
        city: 'Jamshedpur',
        country: 'IN',
        temperature: 31,
        condition: 'Clouds',
        icon: 'fa-cloud',
        feelsLike: 34,
        high: 33,
        low: 26,
        humidity: 68,
        wind: 12,
        rainChance: 40,
        uvIndex: 7,
        sunrise: '5:14 AM',
        sunset: '6:32 PM',
        dayLength: '13h 18m',
        hourlyForecast: [
            { time: '1PM', temp: 31, icon: 'fa-cloud' },
            { time: '2PM', temp: 32, icon: 'fa-cloud-sun' },
            { time: '3PM', temp: 31, icon: 'fa-cloud' },
            { time: '4PM', temp: 30, icon: 'fa-cloud-sun' },
            { time: '5PM', temp: 29, icon: 'fa-cloud-sun' },
            { time: '6PM', temp: 28, icon: 'fa-moon' },
            { time: '7PM', temp: 27, icon: 'fa-moon' },
        ],
    },
    Delhi: {
        city: 'Delhi',
        country: 'IN',
        temperature: 36,
        condition: 'Clear',
        icon: 'fa-sun',
        feelsLike: 40,
        high: 38,
        low: 28,
        humidity: 45,
        wind: 9,
        rainChance: 10,
        uvIndex: 9,
        sunrise: '5:32 AM',
        sunset: '7:18 PM',
        dayLength: '13h 46m',
        hourlyForecast: [
            { time: '1PM', temp: 36, icon: 'fa-sun' },
            { time: '2PM', temp: 37, icon: 'fa-sun' },
            { time: '3PM', temp: 36, icon: 'fa-sun' },
            { time: '4PM', temp: 35, icon: 'fa-sun' },
            { time: '5PM', temp: 34, icon: 'fa-cloud-sun' },
            { time: '6PM', temp: 33, icon: 'fa-cloud-sun' },
            { time: '7PM', temp: 32, icon: 'fa-moon' },
        ],
    },
    Dubai: {
        city: 'Dubai',
        country: 'AE',
        temperature: 41,
        condition: 'Clear',
        icon: 'fa-sun',
        feelsLike: 46,
        high: 43,
        low: 32,
        humidity: 55,
        wind: 14,
        rainChance: 5,
        uvIndex: 10,
        sunrise: '5:48 AM',
        sunset: '7:10 PM',
        dayLength: '13h 22m',
        hourlyForecast: [
            { time: '1PM', temp: 41, icon: 'fa-sun' },
            { time: '2PM', temp: 42, icon: 'fa-sun' },
            { time: '3PM', temp: 41, icon: 'fa-sun' },
            { time: '4PM', temp: 40, icon: 'fa-sun' },
            { time: '5PM', temp: 39, icon: 'fa-cloud-sun' },
            { time: '6PM', temp: 38, icon: 'fa-cloud-sun' },
            { time: '7PM', temp: 37, icon: 'fa-moon' },
        ],
    },
    'New York': {
        city: 'New York',
        country: 'US',
        temperature: 18,
        condition: 'Rain',
        icon: 'fa-cloud-rain',
        feelsLike: 17,
        high: 21,
        low: 14,
        humidity: 82,
        wind: 22,
        rainChance: 85,
        uvIndex: 2,
        sunrise: '6:05 AM',
        sunset: '7:58 PM',
        dayLength: '13h 53m',
        hourlyForecast: [
            { time: '1PM', temp: 18, icon: 'fa-cloud-rain' },
            { time: '2PM', temp: 18, icon: 'fa-cloud-rain' },
            { time: '3PM', temp: 17, icon: 'fa-cloud-rain' },
            { time: '4PM', temp: 17, icon: 'fa-droplet' },
            { time: '5PM', temp: 16, icon: 'fa-cloud' },
            { time: '6PM', temp: 16, icon: 'fa-cloud' },
            { time: '7PM', temp: 15, icon: 'fa-moon' },
        ],
    },
    Toronto: {
        city: 'Toronto',
        country: 'CA',
        temperature: 14,
        condition: 'Drizzle',
        icon: 'fa-droplet',
        feelsLike: 12,
        high: 17,
        low: 10,
        humidity: 76,
        wind: 18,
        rainChance: 60,
        uvIndex: 4,
        sunrise: '6:18 AM',
        sunset: '8:12 PM',
        dayLength: '13h 54m',
        hourlyForecast: [
            { time: '1PM', temp: 14, icon: 'fa-droplet' },
            { time: '2PM', temp: 15, icon: 'fa-cloud-rain' },
            { time: '3PM', temp: 14, icon: 'fa-droplet' },
            { time: '4PM', temp: 14, icon: 'fa-cloud' },
            { time: '5PM', temp: 13, icon: 'fa-cloud' },
            { time: '6PM', temp: 12, icon: 'fa-cloud-sun' },
            { time: '7PM', temp: 11, icon: 'fa-moon' },
        ],
    },
    Beijing: {
        city: 'Beijing',
        country: 'CN',
        temperature: 24,
        condition: 'Haze',
        icon: 'fa-smog',
        feelsLike: 26,
        high: 27,
        low: 19,
        humidity: 58,
        wind: 11,
        rainChance: 20,
        uvIndex: 5,
        sunrise: '5:42 AM',
        sunset: '7:25 PM',
        dayLength: '13h 43m',
        hourlyForecast: [
            { time: '1PM', temp: 24, icon: 'fa-smog' },
            { time: '2PM', temp: 25, icon: 'fa-smog' },
            { time: '3PM', temp: 24, icon: 'fa-cloud-sun' },
            { time: '4PM', temp: 24, icon: 'fa-cloud-sun' },
            { time: '5PM', temp: 23, icon: 'fa-cloud' },
            { time: '6PM', temp: 22, icon: 'fa-cloud' },
            { time: '7PM', temp: 21, icon: 'fa-moon' },
        ],
    },
};

// Cities used in the "Other Cities" section. The current city is filtered out.
const OTHER_CITIES = ['Delhi', 'Dubai', 'New York', 'Toronto', 'Beijing'];

// Kept for backward compatibility. Always true since we don't need an API key.
export function hasApiKey() {
    return true;
}

// Look up a city's weather. Matches the live API's return shape so the rest of the app
// doesn't need to know the data is mocked.
export async function getWeatherByCity(cityName) {
    // Normalize the input the same way users might type it
    const trimmed = (cityName || '').trim();
    if (!trimmed) {
        return { success: false, error: 'Please enter a city name.' };
    }

    // Try exact match first, then case-insensitive match
    const key = Object.keys(MOCK_DB).find(
        (k) => k.toLowerCase() === trimmed.toLowerCase()
    );

    if (!key) {
        return { success: false, error: `City "${trimmed}" not found.` };
    }

    // Return a fresh copy so consumers can't mutate the DB
    return { success: true, data: { ...MOCK_DB[key] } };
}

// Returns weather for the "Other Cities" panel, excluding the currently selected city.
export async function getOtherCitiesWeather(currentCity) {
    const others = OTHER_CITIES.filter(
        (c) => c.toLowerCase() !== (currentCity || '').toLowerCase()
    ).slice(0, 4);

    return others.map((city) => ({ ...MOCK_DB[city] }));
}
