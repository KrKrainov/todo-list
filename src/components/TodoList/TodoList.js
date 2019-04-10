import React from 'react';
import classNames from 'classnames';

import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ todos }) => {
    const elements = todos.map((item) => {
        const { id, important, done, ...itemProps } = item;
        return (
            <li className={classNames("list-group-item", {"important": important, "done": done})} key={id}>
               <TodoListItem { ...itemProps }/>
           </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    )
};

export default TodoList;