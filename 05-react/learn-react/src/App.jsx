import { add, multiply, substract, divide } from './components/export/export.jsx';
import CarsList from './components/cars/CarsList';
import CarsObject from './components/cars/CarsObject';
import Form from './components/forms/Forms';
import Counter from './components/useState/Counter.jsx';
import Timer from './components/useEffect/Timer.jsx';
import SayHello from './components/SayHello.jsx';
import Button from './components/onClick/Button.jsx';
import Counter2 from './components/Counter/Counter2.jsx';

import './App.css';

export default function App() {
    return (
        <div>
            {/* <h1>Named Exports :</h1>
            <h2>{add(5, 20)}</h2>
            <h2>{multiply(3, 6)}</h2>
            <h2>{substract(15, 7)}</h2>
            <h2>{divide(10, 2)}</h2>

            <CarsList />
            <CarsObject />
            <Form />
            <Counter />
            <Timer />

            <SayHello />

            <Button />

            <Counter2 /> */}
        </div>
    );
}
