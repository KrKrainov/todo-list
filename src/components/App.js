import React, { PureComponent } from 'react';

import AppHeader from './AppHeader/AppHeader';
import TodoList from './TodoList/TodoList';
import SearchPanel from './SearchPanel/SearchPanel';

const TODO_DATA = [
    { label: 'Drink Coffee', id: 1 },
    { label: 'Create new component', id: 2 },
    { label: 'Make Awesome App', id: 3 }
];

class App extends PureComponent {
    render() {
        return <div className='container'>
            <div className="row justify-content-center">
                <div className="col-6">
                    <AppHeader/>
                    <SearchPanel/>
                    <TodoList todos={TODO_DATA}/>
                </div>
            </div>
        </div>;
    }
}

export default App;