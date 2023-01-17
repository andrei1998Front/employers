import React from 'react';
import './employers-list-item.css'
// ()
class EmployersListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            invalid: false,
        }
    } 

    onSalaryChange = (e, key) => {
        const targetValue = e.target.value;
        const newValue = targetValue.slice(0, targetValue.length - 1);

        if (isNaN(newValue) || !targetValue || targetValue[targetValue.length - 1] !== '$') {
            this.setState(({invalid}) => ({invalid: true}))
        } else {
            this.setState(({invalid}) => ({invalid: false}))
            this.props.onSalaryChange(newValue, key);
        }
    }
   
    render() {
        const {id, name, salary, onDelete,
            onToggleProp,
            increase, like,
        } = this.props;
    
        let classNames = `list-group-item d-flex justify-content-between`;

        if (increase) {
            classNames += ` increase`;
        }

        if (like) {
            classNames += ` like`
        }

        const clazz = this.state.invalid ? 'is-invalid' : '';

        return (

            <li className={classNames}>
                <span
                    className="list-group-item-label"
                    data-toggle='like'
                    onClick={onToggleProp}
                >{name}</span>
                <input
                    type="text"
                    className={`list-group-item-input ${clazz}`}
                    defaultValue={`${salary}$`}
                    onChange = {(e) => this.onSalaryChange(e,id)}
                />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick = {onToggleProp}
                        data-toggle='increase'
                    >    
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
};

export default EmployersListItem;