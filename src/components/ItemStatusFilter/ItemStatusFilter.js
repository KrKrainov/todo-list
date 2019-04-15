import React, { PureComponent } from "react";

export default class ItemStatusFilter extends PureComponent {
    buttons = [
        { name: 'all', label: 'All' },
        { name: 'important', label: 'Important' },
        { name: 'done', label: 'Done' }
    ];

    render() {
        const { toggleFilter, filter } = this.props;

        const buttons = this.buttons.map(({ name, label }) => {
            const activeClass = filter === name ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                    key={name}
                    type="button"
                    className={`btn ${activeClass}`}
                    onClick={() => toggleFilter(name)}>
                    {label}
                    </button>
            );
        });

        return (
            <div className="btn-group float-right mb-3">
                {buttons}
            </div>
        )
    }
}