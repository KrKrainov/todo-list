import React, { PureComponent } from 'react';
import classNames from 'classnames';

import './TodoListItem.css';

export default class TodoListItem extends PureComponent {
    state = {
        done: false
    };

    onItemClick = () => {
        this.setState({ done: !this.state.done });
    };

    render() {
        const { label, important } = this.props;
        const { done } = this.state;

        return (
            <span
                className={classNames("todo-list-item", {"important": important, "done": done})}
                onClick={this.onItemClick}>
                <span>{label}</span>
                <button type="button" className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation"/>
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm float-right mr-1">
                    <i className="fa fa-trash-o"/>
                </button>
            </span>
        )
    }
}