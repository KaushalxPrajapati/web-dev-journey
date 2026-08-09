import './App.css';

// Basics
import { add, multiply } from './components/01-basics/ExportFunctions.jsx';
import SayHello from './components/01-basics/SayHello.jsx';
import CarsObject from './components/01-basics/CarsObject.jsx';
import CarsList from './components/01-basics/CarsList.jsx';

// Props
import UserProfile from './components/02-props/UserProfile.jsx';

// Events & Forms
import Button from './components/03-events-and-forms/Button.jsx';
import Forms from './components/03-events-and-forms/Forms.jsx';

// Hooks: useState
import Counter from './components/04-hooks/01-useState/Counter1.jsx';
import Counter2 from './components/04-hooks/01-useState/Counter2.jsx';
import LikeButton from './components/04-hooks/01-useState/LikeButton.jsx';
import LudoBoard from './components/04-hooks/01-useState/LudoBoard.jsx';
import ToggleButton from './components/04-hooks/01-useState/ToggleButton.jsx';
import Joke from './components/04-hooks/01-useState/Joke.jsx';

// Hooks: useEffect
import Timer from './components/04-hooks/02-useEffect/Timer.jsx';
import LiveClock from './components/04-hooks/02-useEffect/LiveClock.jsx';

// Hooks: useContext
import UserContext from './components/04-hooks/03-useContext/UserContext.jsx';
import Child from './components/04-hooks/03-useContext/Child.jsx';

// Hooks: Advanced (useRef, useMemo, useCallback)
import UseRefDemo from './components/04-hooks/04-useRef/UseRefDemo.jsx';
import UseMemoDemo from './components/04-hooks/05-useMemo/UseMemoDemo.jsx';
import UseCallbackDemo from './components/04-hooks/06-useCallback/UseCallbackDemo.jsx';

// Practice Project
import TodoList from '../../../../04-projects/03-react-apps/todo-list/src/components/TodoList.jsx';

export default function App() {
    return (
        <div className="app-container">
            <h1>React Practice Gallery</h1>

            {/* React Basics & JSX */}
            <div className="category-header">React Basics & JSX</div>

            <section className="component-section">
                <h2>Module Exports & Imports</h2>
                <p>5 + 10 = {add(5, 10)}</p>
                <p>5 * 10 = {multiply(5, 10)}</p>
            </section>

            <section className="component-section">
                <h2>Basic Component & Variable Interpolation (SayHello)</h2>
                <SayHello />
            </section>

            <section className="component-section">
                <h2>Rendering Object Properties (CarsObject)</h2>
                <CarsObject />
            </section>

            <section className="component-section">
                <h2>Rendering Lists (CarsList)</h2>
                <CarsList />
            </section>

            {/* Props & Component Communication */}
            <div className="category-header">Props & Component Communication</div>

            <section className="component-section">
                <h2>Passing Props & Callbacks (UserProfile & Header)</h2>
                <UserProfile />
            </section>

            {/* Events & Forms */}
            <div className="category-header">Events & Forms</div>

            <section className="component-section">
                <h2>Event Handlers (Button)</h2>
                <Button />
            </section>

            <section className="component-section">
                <h2>Form Handling (Forms)</h2>
                <Forms />
            </section>

            {/* React Hooks */}
            <div className="category-header">React Hooks</div>

            <section className="component-section">
                <h2>useState: Basic Counter</h2>
                <Counter />
            </section>

            <section className="component-section">
                <h2>useState: Counter 2</h2>
                <Counter2 />
            </section>

            <section className="component-section">
                <h2>useState: Like Button</h2>
                <LikeButton />
            </section>

            <section className="component-section">
                <h2>useState: Ludo Board</h2>
                <LudoBoard />
            </section>

            <section className="component-section">
                <h2>useState: State Toggle Button (ToggleButton)</h2>
                <ToggleButton />
            </section>

            <section className="component-section">
                <h2>useState: API Data Fetching (Joke)</h2>
                <Joke />
            </section>

            <section className="component-section">
                <h2>useEffect: Timer</h2>
                <Timer />
            </section>

            <section className="component-section">
                <h2>useEffect: Live Clock (LiveClock)</h2>
                <LiveClock />
            </section>

            <section className="component-section">
                <h2>useContext: Global Context (UserContext & Child)</h2>
                <UserContext.Provider value="Kaushal">
                    <Child />
                </UserContext.Provider>
            </section>

            <section className="component-section">
                <h2>useRef: DOM Reference & Non-Rendering Ref</h2>
                <UseRefDemo />
            </section>

            <section className="component-section">
                <h2>useMemo: Caching Computation</h2>
                <UseMemoDemo />
            </section>

            <section className="component-section">
                <h2>useCallback: Caching Functions</h2>
                <UseCallbackDemo />
            </section>

            {/* Practice Project */}
            <div className="category-header">Practice Project</div>

            <section className="component-section">
                <h2>Todo List Application</h2>
                <TodoList />
            </section>
        </div>
    );
}
