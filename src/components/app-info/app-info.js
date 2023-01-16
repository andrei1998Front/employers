import React from 'react';

import './app-info.css';

const AppInfo = (props) => {
    const {countEmployers, incresedEmployersCount} = props;

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {countEmployers}</h2>
            <h2>Премию получат: {incresedEmployersCount}</h2>
        </div>
    );
};

export default AppInfo;