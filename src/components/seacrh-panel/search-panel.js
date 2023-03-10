import React from 'react';

import './search-panel.css';

class SearchPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           term: '' 
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;

        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {

        const {term} = this.state;

        return (
            <input 
                type="text"
                className='form-control search-input'
                placeholder="Найти сотрудника"
                onChange={this.onUpdateSearch}
                value={term}
            />
        )
    }
};

export default SearchPanel;