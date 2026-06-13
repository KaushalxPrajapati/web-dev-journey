import { useState } from 'react';
import './App.css';
import Hero from './hero';
import Navbar from './navbar';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
        </div>
    );
}

export default App;
