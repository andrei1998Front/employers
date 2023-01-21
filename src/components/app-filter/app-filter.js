import React from 'react';

import './app-filter.css';

const AppFilter = ({filter, onFilterSelect}) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники',},
        {name: 'like', label: 'На повышение'},
        {name: 'moreThen1000', label: 'Больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = filter === name,
              clazz = active ? `btn-light` : `btn-outline-light`;

        return (
            <button
                type="button"
                key = {name}
                className = {`btn ${clazz}`}
                onClick = {() => onFilterSelect(name)}
            >{label }</button>
        );
    }); 
    
    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default AppFilter;