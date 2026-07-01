# 🌤️ Weather Dashboard

A modern, dark-themed Weather Dashboard built with **React + Vite**. This project shows current weather, hourly forecast, today's highlights, sunrise/sunset info, and weather for other cities.

![React](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-8-purple) ![Bootstrap](https://img.shields.io/badge/Bootstrap-5-blueviolet)

---

## 🛠️ Tech Stack

| Technology          | Purpose                        |
| ------------------- | ------------------------------ |
| **React**           | Component-based UI             |
| **Vite**            | Fast dev server and build tool |
| **Bootstrap 5**     | Responsive grid and utilities  |
| **Font Awesome**    | Weather and UI icons           |
| **Custom CSS**      | Dark theme and custom styling  |
| **OpenWeather API** | Real weather data (optional)   |

> **Note:** No backend or Node.js server is needed. This is a 100% frontend React project. Node.js is only used for npm and Vite tooling.

---

## 📦 How to Install

```bash
# Clone or open the project folder
cd weather-app

# Install dependencies
npm install
```

---

## 🚀 How to Run

```bash
# Start development server
npm run dev
```

Open your browser at `http://localhost:5173`

---

## 🔑 How to Add OpenWeather API Key (Optional)

1. Go to [OpenWeather](https://openweathermap.org/) and sign up for a free account.
2. Copy your API key.
3. Create a `.env` file in the project root:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

4. Restart the dev server (`npm run dev`).

The app works **without** an API key too — it uses mock data for 5 cities.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Dashboard/          # Main layout - combines all components
│   ├── Sidebar/            # Left navigation sidebar with icons
│   ├── SearchBar/          # City search input
│   ├── WeatherCard/        # Current weather display
│   ├── ForecastSection/    # Hourly forecast cards
│   ├── HighlightsSection/  # Today's highlights (rain, UV, wind, humidity)
│   ├── SunriseCard/        # Sunrise, sunset, and day length
│   └── OtherCities/        # Weather cards for other cities
├── data/
│   └── mockWeatherData.js  # Fake data for 5 cities
├── services/
│   └── weatherApi.js       # OpenWeather API integration
├── App.jsx                 # Root component
├── main.jsx                # Entry point (imports Bootstrap, Font Awesome)
└── index.css               # Global styles
```

---

## 🧩 What Each Component Does

| Component           | Description                                                                       |
| ------------------- | --------------------------------------------------------------------------------- |
| `Dashboard`         | The main layout. Manages state, handles search, and renders all other components. |
| `Sidebar`           | Shows navigation icons (home, search, location, settings, etc.)                   |
| `SearchBar`         | Input field where users type a city name to search weather.                       |
| `WeatherCard`       | Shows the main weather info - temperature, condition, high/low, feels-like.       |
| `ForecastSection`   | Displays 7 hourly forecast cards with time, icon, and temperature.                |
| `HighlightsSection` | Shows 4 highlight cards - Rain Chance, UV Index, Wind, Humidity.                  |
| `SunriseCard`       | Shows sunrise time, sunset time, and length of day.                               |
| `OtherCities`       | Shows weather for 4 other cities. Click a city to switch to it.                   |

---

## 🎓 What to Explain to Your Teacher

1. **React Components**: The UI is split into small, reusable components. Each component has its own `.jsx` and `.css` file.

2. **State Management**: `useState` hook is used in `Dashboard.jsx` to manage the current weather data, loading state, and errors.

3. **Props**: Data flows from parent (`Dashboard`) to child components through props. For example, `WeatherCard` receives `weather` as a prop.

4. **Event Handling**: The search bar uses `onSubmit` event and passes the city name up to `Dashboard` through a callback function (`onSearch`).

5. **Conditional Rendering**: Error messages and loading spinners are shown conditionally using `{condition && <element>}`.

6. **API Integration**: The app can fetch real weather data from OpenWeather API. If no API key is set, it uses mock data instead.

7. **CSS Modules**: Each component has its own CSS file for organized styling.

8. **Responsive Design**: Bootstrap grid (`row`, `col-lg`, `col-md`) is used for responsive layouts. Custom CSS handles dark theme and visual polish.

---

## ✅ Features

- 🌙 Dark modern UI
- 🔍 City search functionality
- 🌡️ Current weather with temperature, condition, feels-like
- ⏰ Hourly forecast (7 time slots)
- 📊 Today's highlights (Rain, UV, Wind, Humidity)
- 🌅 Sunrise & Sunset info
- 🏙️ Other cities weather cards
- 📱 Responsive design (Desktop, Tablet, Mobile)
- 🔄 Works with mock data or live API
- ⚡ Built with Vite for fast development

---

## 🔧 Optional Improvements

- Add 5-day forecast using OpenWeather's forecast API
- Add geolocation to auto-detect user's city
- Add temperature unit toggle (°C / °F)
- Add weather animations (rain, snow effects)
- Add localStorage to remember last searched city
