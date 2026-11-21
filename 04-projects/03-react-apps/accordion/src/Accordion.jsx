import { useState } from 'react';
import './Accordion.css';
import data from './data.js';

function Test() {
    const [selected, setSelected] = useState(null);

    function handleClick(currId) {
        setSelected(currId === selected ? null : currId);
    }

    return (
        <div className="container">
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((dataItem) => {
                        const isOpen = selected === dataItem.id;

                        return (
                            <div className="item" key={dataItem.id}>
                                {/* Clickable Header */}
                                <div className="header" onClick={() => handleClick(dataItem.id)}>
                                    <h3 className="title">{dataItem.title}</h3>
                                    <i className={`fa-solid fa-chevron-down icon ${isOpen ? 'open' : ''}`}></i>
                                </div>

                                {/* Collapsible Content */}
                                {isOpen && <div className="content">{dataItem.content}</div>}
                            </div>
                        );
                    })
                ) : (
                    <div className="no-data">No data found</div>
                )}
            </div>
        </div>
    );
}

export default Test;
