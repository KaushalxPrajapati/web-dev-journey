import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/Navbar.jsx';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import MyWork from './components/MyWork.jsx';
import NotFound from './components/NotFound.jsx';

import Footer from './components/footer/Footer.jsx';
function App() {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/my-work" element={<MyWork />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
