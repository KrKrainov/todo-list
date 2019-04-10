import React, { PureComponent } from 'react';

import AppHeader from './AppHeader/AppHeader';
import TodoList from './TodoList/TodoList';
import SearchPanel from './SearchPanel/SearchPanel';
import ItemStatusFilter from './ItemStatusFilter/ItemStatusFilter';

const TODO_DATA = [
    { label: 'Drink Coffee', important: true, id: 1 },
    { label: 'Create new component', important: false, id: 2 },
    { label: 'Make Awesome App', important: false, id: 3 }
];

class App extends PureComponent {
    render() {
        return <div className='container'>
            <div className="row justify-content-center">
                <div className="col-6">
                    <AppHeader/>
                    <div className="row">
                        <SearchPanel/>
                        <ItemStatusFilter/>
                    </div>
                    <TodoList todos={TODO_DATA}/>
                </div>
            </div>
        </div>;
    }
}

export default App;