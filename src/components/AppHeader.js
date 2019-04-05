import React from 'react';

import SearchPanel from './SearchPanel';

const AppHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <span className="navbar-brand mb-0 h1">{`ToDo List`}</span>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <SearchPanel/>
            </div>
        </nav>
    )
};

export default AppHeader;