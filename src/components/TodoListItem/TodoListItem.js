import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ label }) => {
    return (
        <span className="todo-list-item">
            <span>{label}</span>
            <button type="button" className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"/>
            </button>
            <button type="button" className="btn btn-outline-danger btn-sm float-right mr-1">
                <i className="fa fa-trash-o"/>
            </button>
        </span>
    )
};

export default TodoListItem;