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
                {name: "John C.", salary: 800, increase: true, like: false, id: nextId()},
                {name: "Alex M.", salary: 3000, increase: false, like: true, id: nextId()},
                {name: "Ivan S.", salary: 5000, increase: false, like: false, id: nextId()},
            ],

            term: '',
            filter: 'all',
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

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }

                return item;
            })
        }));
    }

    searchEmp = (str, arr) => {
        if (!str) {
            return arr;
        }

        return arr.filter(el => {
            return el.name.indexOf(str) > -1;
        });
    }

    onUpdateSearch = (str) => {
        this.setState({term: str});
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'like': 
                return items.filter(({like}) => like);

            case 'moreThen1000':
                return items.filter(({salary}) => salary > 1000);

            default: 
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState(({filter}))
    }

    onSalaryChange = (salary, id) =>{
        this.setState(({data}) => {
            return {
                data: data.map(el => {
                    if (el.id === id) {
                        el.salary = salary;
                        return el;
                    }
    
                    return el;
                })
            }
        })
    }

    render() {

        const {data, term, filter} = this.state;

        const incresedEmployersCount = data.filter(({increase}) =>  increase).length;

        const visibleData = this.filterPost(this.searchEmp(term, data), filter);
        
        return (
            <div className="app">
                <AppInfo
                    countEmployers={data.length}
                    incresedEmployersCount = {incresedEmployersCount}
                />
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch }/>
                    <AppFilter
                        filter = {filter}
                        onFilterSelect = {this.onFilterSelect}
                    />
                </div>
    
                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp = {this.onToggleProp}
                    onSalaryChange = {this.onSalaryChange}
                />
                <EmployersAddForm  onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;