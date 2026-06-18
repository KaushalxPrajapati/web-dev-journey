import './App.css';

import { Routes, Route, Link, Form } from 'react-router-dom';

import Hero from './components/hero/Hero.jsx';
import Navbar from './components/navbar/Navbar.jsx';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import NotFound from './components/NotFound.jsx';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
