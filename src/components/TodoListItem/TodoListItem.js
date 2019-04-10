import React, { PureComponent } from 'react';
import classNames from 'classnames';

import './TodoListItem.css';

export default class TodoListItem extends PureComponent {
    render() {
        const { label, important, done, onDeleted, toggleProperty } = this.props;

        return (
            <span className={classNames("todo-list-item", {"important": important, "done": done})}>
                <span onClick={() => toggleProperty('done')}>{label}</span>
                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={() => toggleProperty('important')}>
                    <i className="fa fa-exclamation"/>
                </button>
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right mr-1"
                    onClick={onDeleted}>
                    <i className="fa fa-trash-o"/>
                </button>
            </span>
        )
    }
}