import React, {Component} from 'react';


import nextId from 'react-id-generator';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../seacrh-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {name: "John C.", salary: 800, increase: true, id: nextId()},
                {name: "Alex M.", salary: 3000, increase: false, id: nextId()},
                {name: "Ivan S.", salary: 5000, increase: false, id: nextId()},
            ],
        }
    }

    deleteItem  = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter((el => el.id !== id)),
            }
        });
    }

    addItem = (name, salary) => {
        this.setState(({data}) => {
            return {
                data: [...data, {name, salary, increase: false, id: nextId()}],
            }
        });
    }

    render() {

        const {data} = this.state;

        
        
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList
                    data={data}
                    onDelete={this.deleteItem}
                />
                <EmployersAddForm  onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;