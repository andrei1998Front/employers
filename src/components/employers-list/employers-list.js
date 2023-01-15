import React from 'react';
import EmployersListItem from "../employers-list-item/employers-list-item";

import './employers-list.css';

const EmployersList = ({data, onDelete}) => {
    const elems = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem
                key = {id}
                {...itemProps}
                onDelete = {() => onDelete(id)}

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