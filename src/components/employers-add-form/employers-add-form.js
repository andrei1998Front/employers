import React, {Component} from 'react';
import './employers-add-form.css';

class EmployersAddForm extends Component {

    state = {
        name: '',
        salary: '',
    }

    static logged = 'true';

    onVallueChange = (e, name, salary) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {name, salary} = this.state;

        if (name && salary && name.length >= 3 && !isNaN(salary)) {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            })
        }
    }

    static onLog = () => {
        console.log('Hey');
    }

    render() {

        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}
                >
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name="name"
                        value={name}
                        onChange={this.onVallueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={salary}
                        onChange={this.onVallueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div> 
        );
    }
};

// EmployersAddForm.onLog();
// console.log(EmployersAddForm.logged);

export default EmployersAddForm;