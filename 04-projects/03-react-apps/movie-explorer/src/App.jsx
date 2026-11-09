import './App.css';
import Home from './pages/Home.jsx';
import Favourite from './pages/Favourite.jsx';
import NavBar from './components/NavBar.jsx';
import { MovieProvider } from './contexts/MovieContext.jsx';

import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <MovieProvider>
            <div>
                <NavBar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favourite" element={<Favourite />} />
                    </Routes>
                </main>
            </div>
        </MovieProvider>
    );
}

export default App;
