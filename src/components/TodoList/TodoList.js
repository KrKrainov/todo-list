import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, toggleProperty, onDeleted }) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li className="list-group-item" key={id}>
                <TodoListItem
                    { ...itemProps }
                    onDeleted={() => onDeleted(id)}
                    toggleProperty={(propName) => toggleProperty(id, propName)}/>
            </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;