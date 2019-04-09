import React from 'react';

const SearchPanel = () => {
    return (
        <div className="row">
            <div className="col-sm-8">
                <input className="form-control mb-3" type="search" placeholder="Search" aria-label="Search"/>
            </div>
        </div>
    )
};

export default SearchPanel;