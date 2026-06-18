import './App.css';

import { add, multiply } from './components/export/named-export';

import CarsList from './components/cars/CarsList';
import CarsObject from './components/cars/CarsObject';
import Form from './components/forms/Forms';

function App() {
    return (
        <div>
            <CarsList />
            <CarsObject />
            <Form />
        </div>
    );
}

export default App;
