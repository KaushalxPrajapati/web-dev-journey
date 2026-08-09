import './App.css';

// 01 - Basics
import { add, multiply } from './components/01-basics/ExportFunctions.jsx';
import SayHello from './components/01-basics/SayHello.jsx';
import CarsObject from './components/01-basics/CarsObject.jsx';
import CarsList from './components/01-basics/CarsList.jsx';

// 02 - Props
import UserProfile from './components/02-props/UserProfile.jsx';

// 03 - Events & Forms
import Button from './components/03-events-and-forms/Button.jsx';
import Forms from './components/03-events-and-forms/Forms.jsx';

// 04 - Hooks: useState
import Counter from './components/04-hooks/01-useState/Counter1.jsx';
import Counter2 from './components/04-hooks/01-useState/Counter2.jsx';
import LikeButton from './components/04-hooks/01-useState/LikeButton.jsx';
import LudoBoard from './components/04-hooks/01-useState/LudoBoard.jsx';

// 04 - Hooks: useEffect
import Timer from './components/04-hooks/02-useEffect/Timer.jsx';

// 04 - Hooks: useContext
import UserContext from './components/04-hooks/03-useContext/UserContext.jsx';
import Child from './components/04-hooks/03-useContext/Child.jsx';

// 04 - Hooks: Advanced (useRef, useMemo, useCallback)
import UseRefDemo from './components/04-hooks/04-useRef/UseRefDemo.jsx';
import UseMemoDemo from './components/04-hooks/05-useMemo/UseMemoDemo.jsx';
import UseCallbackDemo from './components/04-hooks/06-useCallback/UseCallbackDemo.jsx';

// 05 - Practice Project
import TodoList from '../../02-todo-list/src/components/TodoList.jsx';

export default function App() {
    return (
        <div className="app-container">
            <h1>React Practice: Progressive Learning Journey</h1>

            {/* STEP 1: BASICS & JSX */}
            <div className="category-header">STEP 1: React Basics & JSX</div>

            <section className="component-section">
                <h2>1.1 Module Exports & Imports</h2>
                <p>5 + 10 = {add(5, 10)}</p>
                <p>5 * 10 = {multiply(5, 10)}</p>
            </section>

            <section className="component-section">
                <h2>1.2 Basic Component & Variable Interpolation (SayHello)</h2>
                <SayHello />
            </section>

            <section className="component-section">
                <h2>1.3 Rendering Object Properties (CarsObject)</h2>
                <CarsObject />
            </section>

            <section className="component-section">
                <h2>1.4 Rendering Lists with .map() (CarsList)</h2>
                <CarsList />
            </section>

            {/* STEP 2: PROPS & STATE LIFTING */}
            <div className="category-header">STEP 2: Props & Component Communication</div>

            <section className="component-section">
                <h2>2.1 Passing Props & Callbacks (UserProfile & Header)</h2>
                <UserProfile />
            </section>

            {/* STEP 3: EVENTS & FORMS */}
            <div className="category-header">STEP 3: Handling Events & Forms</div>

            <section className="component-section">
                <h2>3.1 Event Handlers (Button: onClick & onDoubleClick)</h2>
                <Button />
            </section>

            <section className="component-section">
                <h2>3.2 Form Handling & Controlled Elements (Forms)</h2>
                <Forms />
            </section>

            {/* STEP 4: HOOKS */}
            <div className="category-header">STEP 4: React Hooks Step-by-Step</div>

            <section className="component-section">
                <h2>4.1 useState - Basic Counter with Functional Updates</h2>
                <Counter />
            </section>

            <section className="component-section">
                <h2>4.2 useState - Simple Counter 2</h2>
                <Counter2 />
            </section>

            <section className="component-section">
                <h2>4.3 useState - State Toggle (Like Button)</h2>
                <LikeButton />
            </section>

            <section className="component-section">
                <h2>4.4 useState - Complex Object State (Ludo Board)</h2>
                <LudoBoard />
            </section>

            <section className="component-section">
                <h2>4.5 useEffect - Side Effects & Timers</h2>
                <Timer />
            </section>

            <section className="component-section">
                <h2>4.6 useContext - Global Context Tree (UserContext & Child)</h2>
                <UserContext.Provider value="Kaushal">
                    <Child />
                </UserContext.Provider>
            </section>

            <section className="component-section">
                <h2>4.7 useRef - DOM Access & Mutable Non-rendering Ref</h2>
                <UseRefDemo />
            </section>

            <section className="component-section">
                <h2>4.8 useMemo - Caching Computation Results</h2>
                <UseMemoDemo />
            </section>

            <section className="component-section">
                <h2>4.9 useCallback - Caching Function Definitions</h2>
                <UseCallbackDemo />
            </section>

            {/* STEP 5: INTEGRATION PROJECT */}
            <div className="category-header">STEP 5: Practice Project Integration</div>

            <section className="component-section">
                <h2>5.1 Todo List Application</h2>
                <TodoList />
            </section>
        </div>
    );
}
