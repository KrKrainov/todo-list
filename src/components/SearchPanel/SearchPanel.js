import React, { PureComponent } from 'react';

import './SearchPanel.css';

export default class SearchPanel extends PureComponent {
    state = {
        term: ''
    };

    onSearchChange = (event) => {
        const term = event.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <input
                onChange={this.onSearchChange}
                value={this.state.term}
                className="search-panel form-control mb-3"
                type="search"
                placeholder="Search"
                aria-label="Search"/>
        )
    }
};