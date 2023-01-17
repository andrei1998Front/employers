import React from 'react';
import EmployersListItem from "../employers-list-item/employers-list-item";

import './employers-list.css';

const EmployersList = ({data, onDelete, onToggleProp, onSalaryChange}) => {
    const elems = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem
                key = {id}
                id = {id}
                {...itemProps}
                onDelete = {() => onDelete(id)}
                onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onSalaryChange = {onSalaryChange}
            />
        )
    });

    return (
        <ul className="app-list list-group">
            {elems}
        </ul>
    );
};

export default EmployersList;