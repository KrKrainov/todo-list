import React from 'react';

import './AppHeader.css';

const AppHeader = () => {
    return (
        <nav className="app-header navbar">
            <span className="h2">{`ToDo List`}</span>
            <span className="h5">2 more to do, 3 done</span>
        </nav>
    )
};

export default AppHeader;