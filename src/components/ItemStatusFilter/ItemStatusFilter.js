import React, { PureComponent } from "react";

export default class ItemStatusFilter extends PureComponent {
    render() {
        const { toggleFilter, filter } = this.props;

        return (
            <div className="btn-group float-right mb-3">
                <button type="button" className={`btn ${filter === 'all' ? 'btn-info' : 'btn-outline-secondary'}`} onClick={() => toggleFilter('all')}>All</button>
                <button type="button" className={`btn ${filter === 'important' ? 'btn-info' : 'btn-outline-secondary'}`} onClick={() => toggleFilter('important')}>Important</button>
                <button type="button" className={`btn ${filter === 'done' ? 'btn-info' : 'btn-outline-secondary'}`} onClick={() => toggleFilter('done')}>Done</button>
            </div>
        )
    }
}