import { useState } from 'react';
import './App.css';

// Basics
import { add, multiply } from './components/01-basics/ExportFunctions.jsx';
import SayHello from './components/01-basics/SayHello.jsx';
import CarsObject from './components/01-basics/CarsObject.jsx';
import CarsList from './components/01-basics/CarsList.jsx';

// Props
import UserProfile from './components/02-props/UserProfile.jsx';
import ProductTab from './components/02-props/ProductTab.jsx';

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

// Hooks: Advanced
import UseRefDemo from './components/04-hooks/04-useRef/UseRefDemo.jsx';
import UseMemoDemo from './components/04-hooks/05-useMemo/UseMemoDemo.jsx';
import UseCallbackDemo from './components/04-hooks/06-useCallback/UseCallbackDemo.jsx';

// Routing & Single Page App
import RouterDemo from './components/05-routing/RouterDemo.jsx';

// Playground
import Scratchpad from './components/playground/Scratchpad.jsx';

// Practice Project
import TodoList from '../../../../04-projects/03-react-apps/todo-list/src/components/TodoList.jsx';

const TOPICS = [
    {
        category: 'Basics & JSX',
        items: [
            {
                id: 'say-hello',
                title: 'JSX & Variable Interpolation',
                file: 'components/01-basics/SayHello.jsx',
                component: <SayHello />,
            },
            {
                id: 'exports',
                title: 'Module Exports & Imports',
                file: 'components/01-basics/ExportFunctions.jsx',
                component: (
                    <div className="math-demo">
                        <p><code>add(5, 10)</code> &rarr; <strong>{add(5, 10)}</strong></p>
                        <p><code>multiply(5, 10)</code> &rarr; <strong>{multiply(5, 10)}</strong></p>
                    </div>
                ),
            },
            {
                id: 'cars-list',
                title: 'Rendering Lists with Keys',
                file: 'components/01-basics/CarsList.jsx',
                component: <CarsList />,
            },
            {
                id: 'cars-object',
                title: 'Rendering Object Properties',
                file: 'components/01-basics/CarsObject.jsx',
                component: <CarsObject />,
            },
        ],
    },
    {
        category: 'Props & Communication',
        items: [
            {
                id: 'user-profile',
                title: 'Props & Callback Handlers',
                file: 'components/02-props/UserProfile.jsx',
                component: <UserProfile />,
            },
            {
                id: 'product-cards',
                title: 'Component Cards & Destructuring',
                file: 'components/02-props/ProductTab.jsx',
                component: <ProductTab />,
            },
        ],
    },
    {
        category: 'Events & Forms',
        items: [
            {
                id: 'button-events',
                title: 'Synthetic Event Handlers',
                file: 'components/03-events-and-forms/Button.jsx',
                component: <Button />,
            },
            {
                id: 'forms',
                title: 'Form Inputs & Submissions',
                file: 'components/03-events-and-forms/Forms.jsx',
                component: <Forms />,
            },
        ],
    },
    {
        category: 'Hooks: useState',
        items: [
            {
                id: 'counter-1',
                title: 'Counter (Functional Updater)',
                file: 'components/04-hooks/01-useState/Counter1.jsx',
                component: <Counter />,
            },
            {
                id: 'counter-2',
                title: 'Counter (Direct Updater)',
                file: 'components/04-hooks/01-useState/Counter2.jsx',
                component: <Counter2 />,
            },
            {
                id: 'like-button',
                title: 'Like Button (Boolean State)',
                file: 'components/04-hooks/01-useState/LikeButton.jsx',
                component: <LikeButton />,
            },
            {
                id: 'ludo-board',
                title: 'Ludo Board (Object State)',
                file: 'components/04-hooks/01-useState/LudoBoard.jsx',
                component: <LudoBoard />,
            },
            {
                id: 'toggle-button',
                title: 'Toggle Button',
                file: 'components/04-hooks/01-useState/ToggleButton.jsx',
                component: <ToggleButton />,
            },
            {
                id: 'joke-api',
                title: 'Async State Fetching',
                file: 'components/04-hooks/01-useState/Joke.jsx',
                component: <Joke />,
            },
        ],
    },
    {
        category: 'Hooks: useEffect',
        items: [
            {
                id: 'timer',
                title: 'Render Count Timer',
                file: 'components/04-hooks/02-useEffect/Timer.jsx',
                component: <Timer />,
            },
            {
                id: 'live-clock',
                title: 'Live Clock Interval',
                file: 'components/04-hooks/02-useEffect/LiveClock.jsx',
                component: <LiveClock />,
            },
        ],
    },
    {
        category: 'Hooks: useContext',
        items: [
            {
                id: 'user-context',
                title: 'Context Provider & Consumer',
                file: 'components/04-hooks/03-useContext/UserContext.jsx',
                component: (
                    <UserContext.Provider value="Kaushal">
                        <Child />
                    </UserContext.Provider>
                ),
            },
        ],
    },
    {
        category: 'Hooks: Advanced',
        items: [
            {
                id: 'use-ref',
                title: 'useRef (DOM & Non-Rendering Ref)',
                file: 'components/04-hooks/04-useRef/UseRefDemo.jsx',
                component: <UseRefDemo />,
            },
            {
                id: 'use-memo',
                title: 'useMemo (Computation Cache)',
                file: 'components/04-hooks/05-useMemo/UseMemoDemo.jsx',
                component: <UseMemoDemo />,
            },
            {
                id: 'use-callback',
                title: 'useCallback (Function Cache)',
                file: 'components/04-hooks/06-useCallback/UseCallbackDemo.jsx',
                component: <UseCallbackDemo />,
            },
        ],
    },
    {
        category: 'Routing & Navigation',
        items: [
            {
                id: 'react-router',
                title: 'React Router (SPA Navigation)',
                file: 'components/05-routing/RouterDemo.jsx',
                component: <RouterDemo />,
            },
        ],
    },
    {
        category: 'Playground',
        items: [
            {
                id: 'scratchpad',
                title: 'Sandbox Scratchpad',
                file: 'components/playground/Scratchpad.jsx',
                component: <Scratchpad />,
            },
        ],
    },
    {
        category: 'Projects',
        items: [
            {
                id: 'todo-list',
                title: 'Todo List Application',
                file: '04-projects/03-react-apps/todo-list',
                component: <TodoList />,
            },
        ],
    },
];

export default function App() {
    const [activeId, setActiveId] = useState('say-hello');

    let currentItem = null;
    let currentCategory = '';
    for (const group of TOPICS) {
        const found = group.items.find((item) => item.id === activeId);
        if (found) {
            currentItem = found;
            currentCategory = group.category;
            break;
        }
    }

    return (
        <div className="app-shell">
            {/* Sidebar */}
            <aside className="nav-sidebar">
                <nav className="nav-tree">
                    {TOPICS.map((group) => (
                        <div key={group.category} className="nav-section">
                            <div className="section-label">{group.category}</div>
                            <ul className="section-list">
                                {group.items.map((item) => {
                                    const isSelected = activeId === item.id;
                                    return (
                                        <li key={item.id}>
                                            <button
                                                className={`nav-button ${isSelected ? 'active' : ''}`}
                                                onClick={() => setActiveId(item.id)}
                                            >
                                                <span className="nav-label">{item.title}</span>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Main Content Viewport */}
            <main className="main-viewport">
                <div className="focus-view">
                    <header className="page-header">
                        <div className="breadcrumb">
                            <span>{currentCategory}</span>
                            <span className="breadcrumb-separator">/</span>
                            <span className="breadcrumb-current">{currentItem?.title}</span>
                        </div>
                        <div className="header-meta">
                            <h1>{currentItem?.title}</h1>
                            <code className="meta-path">{currentItem?.file}</code>
                        </div>
                    </header>

                    <section className="preview-canvas">
                        <div className="canvas-frame">
                            {currentItem?.component}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
