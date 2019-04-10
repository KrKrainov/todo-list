import React from 'react';

import './AppHeader.css';

const AppHeader = ({ countItem, countDone }) => {
    return (
        <nav className="app-header navbar">
            <span className="h2">{`ToDo List`}</span>
            <span className="h5">{`${countItem} more to do, ${countDone} done`}</span>
        </nav>
    )
};

export default AppHeader;