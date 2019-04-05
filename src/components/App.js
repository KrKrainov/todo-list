import React, { PureComponent } from 'react';

import AppHeader from './AppHeader';
import TodoList from './TodoList';

const TODO_DATA = [
    { label: 'Drink Coffee', id: 1 },
    { label: 'Create new component', id: 2 },
    { label: 'Make Awesome App', id: 3 }
];

class App extends PureComponent {
    render() {
        return <div className='container'>
            <AppHeader/>
            <TodoList todos={TODO_DATA}/>
        </div>;
    }
}

export default App;