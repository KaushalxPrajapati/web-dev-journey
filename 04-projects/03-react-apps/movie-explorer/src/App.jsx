import './App.css';

import Home from './pages/Home.jsx';
import Favourite from './pages/Favourite.jsx';
import NavBar from './components/NavBar.jsx';

import { Routes, Route } from 'react-router-dom';

import test from './Test.jsx';

function App() {
    return (
        <div>
            <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favourite" element={<Favourite />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
