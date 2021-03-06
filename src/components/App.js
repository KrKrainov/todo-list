import React, { PureComponent } from 'react';

import AppHeader from './AppHeader/AppHeader';
import TodoList from './TodoList/TodoList';
import SearchPanel from './SearchPanel/SearchPanel';
import ItemStatusFilter from './ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from './ItemAddForm/ItemAddForm';

class App extends PureComponent {
    maxId = 1000;

    state = {
        data: [
            { label: 'Drink Coffee', important: true, done: false, id: 1 },
            { label: 'Create new component', important: false, done: false, id: 2 },
            { label: 'Make Awesome App', important: false, done: false, id: 3 }
        ],
        filter: 'all',
        term: ''
    };

    toggleFilter = (filter) => {
        this.setState({ filter: filter })
    };

    filterData = (data, filter) => {
        if(filter === 'all') return data;
        return data.filter((item) => item[filter]);
    };

    toggleProperty = (id, propName) => {
        this.setState(({ data }) => {
            return { data: data.map((item) => {
                    if(item.id === id) return {...item, [propName]: !item[propName]};
                    return {...item};
                })
            };
        })
    };

    onSearchChange = (term) => this.setState({ term });

    search(items, term) {
        if (term.length === 0) return items;
        return items.filter((item) => item.label
            .toLowerCase()
            .indexOf(term.toLowerCase()) > -1);
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return { data: data.filter((item) => item.id !== id) };
        })
    };

    addItem = (text) => {
        this.setState(({ data }) => {
            return { data: [
                    ...data,
                    {
                        label: text,
                        important: false,
                        done: false,
                        id: this.maxId++
                    }
                ]};
        })
    };

    render() {
        const { data, filter, term } = this.state;
        let visibleItems = this.search(
            this.filterData(data, filter), term);

        return <div className='container'>
            <div className="row justify-content-center">
                <div className="col-6">
                    <AppHeader
                        countItem={data.length}
                        countDone={data.filter((item) => item.done).length}/>
                    <div className="d-flex">
                        <SearchPanel onSearchChange={this.onSearchChange}/>
                        <ItemStatusFilter toggleFilter={this.toggleFilter} filter={filter} />
                    </div>
                    <TodoList
                        todos={visibleItems}
                        toggleProperty={this.toggleProperty}
                        onDeleted={this.deleteItem}
                    />
                    <ItemAddForm onItemAdded={this.addItem}/>
                </div>
            </div>
        </div>;
    }
}

export default App;