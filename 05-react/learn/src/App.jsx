import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import all components
import SayHello from './components/SayHello.jsx';
import TodoList from '../../9999/vite-project/src/TodoList.jsx';
import CarsList from './components/cars/CarsList.jsx';
import CarsObject from './components/cars/CarsObject.jsx';
import UserProfile from './components/ChangeText/UserProfile.jsx';
import Forms from './components/forms/Forms.jsx';
import Counter2 from './components/hooks/Counter/Counter2.jsx';
import LikeButton from './components/hooks/LikeButton/LikeButton.jsx';
import Button from './components/hooks/onClick/Button.jsx';
import Timer from './components/hooks/useEffect/Timer.jsx';
import Counter from './components/hooks/useState/Counter.jsx';
import LudoBoard from './components/LudoBoard/LudoBoard.jsx';

// New Advanced Hook Examples
import UseRefDemo from './components/hooks/useRef/UseRefDemo.jsx';
import UseMemoDemo from './components/hooks/useMemo/UseMemoDemo.jsx';
import UseCallbackDemo from './components/hooks/useCallback/UseCallbackDemo.jsx';

export default function App() {
    return (
        <div className="app-container">
            <aside className="sidebar">
                <h2>React Gallery</h2>
                <nav>
                    <ul className="nav-list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <div className="nav-divider">Basic Components</div>
                        <li>
                            <Link to="/say-hello">Say Hello</Link>
                        </li>
                        <li>
                            <Link to="/user-profile">User Profile</Link>
                        </li>
                        <li>
                            <Link to="/ludo-board">Ludo Board</Link>
                        </li>

                        <div className="nav-divider">Lists & Objects</div>
                        <li>
                            <Link to="/todo-list">Todo List</Link>
                        </li>
                        <li>
                            <Link to="/cars-list">Cars List</Link>
                        </li>
                        <li>
                            <Link to="/cars-object">Cars Object</Link>
                        </li>

                        <div className="nav-divider">Forms & Events</div>
                        <li>
                            <Link to="/forms">Forms</Link>
                        </li>
                        <li>
                            <Link to="/button">Button (onClick)</Link>
                        </li>

                        <div className="nav-divider">Basic Hooks</div>
                        <li>
                            <Link to="/counter">useState (Counter)</Link>
                        </li>
                        <li>
                            <Link to="/counter2">useState (Counter 2)</Link>
                        </li>
                        <li>
                            <Link to="/like-button">useState (Like Button)</Link>
                        </li>
                        <li>
                            <Link to="/timer">useEffect (Timer)</Link>
                        </li>

                        <div className="nav-divider">Advanced Hooks</div>
                        <li>
                            <Link to="/use-ref">useRef Demo</Link>
                        </li>
                        <li>
                            <Link to="/use-memo">useMemo Demo</Link>
                        </li>
                        <li>
                            <Link to="/use-callback">useCallback Demo</Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            <main className="main-content">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="welcome-screen">
                                <h1>Welcome to your React Gallery! ⚛️</h1>
                                <p>Select a component from the sidebar on the left to view it in action.</p>
                                <p>
                                    This allows you to safely test and view all your practice components without
                                    constantly commenting out code in App.jsx!
                                </p>
                            </div>
                        }
                    />
                    <Route path="/say-hello" element={<SayHello />} />
                    <Route path="/todo-list" element={<TodoList />} />
                    <Route path="/cars-list" element={<CarsList />} />
                    <Route path="/cars-object" element={<CarsObject />} />
                    <Route path="/user-profile" element={<UserProfile />} />
                    <Route path="/forms" element={<Forms />} />
                    <Route path="/counter2" element={<Counter2 />} />
                    <Route path="/like-button" element={<LikeButton />} />
                    <Route path="/button" element={<Button />} />
                    <Route path="/timer" element={<Timer />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/ludo-board" element={<LudoBoard />} />

                    {/* Advanced Hook Routes */}
                    <Route path="/use-ref" element={<UseRefDemo />} />
                    <Route path="/use-memo" element={<UseMemoDemo />} />
                    <Route path="/use-callback" element={<UseCallbackDemo />} />
                </Routes>
            </main>
        </div>
    );
}
