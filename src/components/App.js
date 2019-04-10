import React, { PureComponent } from 'react';

import AppHeader from './AppHeader/AppHeader';
import TodoList from './TodoList/TodoList';
import SearchPanel from './SearchPanel/SearchPanel';
import ItemStatusFilter from './ItemStatusFilter/ItemStatusFilter';

class App extends PureComponent {
    state = {
        data: [
            { label: 'Drink Coffee', important: true, done: false, id: 1 },
            { label: 'Create new component', important: false, done: false, id: 2 },
            { label: 'Make Awesome App', important: false, done: false, id: 3 }
        ]
    };

    onItemClick = (id) => {
        this.setState(({ data }) => {
            return { data: data.map((item) => {
                    if(item.id === id) return {...item, done: !item.done};
                    return {...item};
                })
            };
        })
    };

    onMarkImportant = (id) => {
        this.setState(({ data }) => {
            return { data: data.map((item) => {
                    if(item.id === id) return {...item, important: !item.important};
                    return {...item};
                })
            };
        })
    };

    onDeleted = (id) => {
        this.setState(({ data }) => {
            return { data: data.filter((item) => item.id !== id) };
        })
    };

    render() {
        const { data } = this.state;
        return <div className='container'>
            <div className="row justify-content-center">
                <div className="col-6">
                    <AppHeader/>
                    <div className="row">
                        <SearchPanel/>
                        <ItemStatusFilter/>
                    </div>
                    <TodoList
                        todos={data}
                        onItemClick={this.onItemClick}
                        onMarkImportant={this.onMarkImportant}
                        onDeleted={this.onDeleted}
                    />
                </div>
            </div>
        </div>;
    }
}

export default App;