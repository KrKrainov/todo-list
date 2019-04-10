import React, { PureComponent } from "react";

export default class ItemStatusFilter extends PureComponent {
    render() {
        return (
            <div className="btn-group float-right mb-3">
                <button type="button" className="btn btn-info">All</button>
                <button type="button" className="btn btn-outline-secondary">Important</button>
                <button type="button" className="btn btn-outline-secondary">Done</button>
            </div>
        )
    }
}