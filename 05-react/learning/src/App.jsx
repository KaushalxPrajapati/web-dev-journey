import { useState } from 'react';
import './App.css';

import CarsList from './components/cars/CarsList';
import CarsObject from './components/cars/CarsObject';

function App() {
    return (
        <div>
            <CarsList />
            <CarsObject />
        </div>
    );
}

export default App;
