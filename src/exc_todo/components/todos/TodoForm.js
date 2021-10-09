import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";

class TodoForm extends Component {

    formSubmit = (form) => {
        this.props.onFormSubmit(form);
    }

    renderInput = ({input, label, meta: {touched, error, warning}}) => {
        return (
            <div className={`field ${touched && ((error && 'error') || (warning && 'warning'))}`}>
                <label>{label}</label>
                <input {...input} />
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        );
    }

    renderCheckbox = ({input}) => {
        return (
            <div className="field">
                <label>Status</label>
                <input type='checkbox' {...input} />
            </div>
        );
    }

    render () {
        console.log(this.props);
        const {handleSubmit, reset} = this.props;
        return (
            <div>
                <h2>{this.props.formTitle}</h2>
                <form className="ui form" onSubmit={handleSubmit(this.formSubmit)}>
                    <Field name="title" label="Title" component={this.renderInput} type="text" />
                    <Field name="description" label="Description" component={this.renderInput} type="text" />
                    <Field name="date" label="End Date" component={this.renderInput} type="date" />
                    <Field name="status" label="End Date" component={this.renderCheckbox} type="checkbox" />
                    <button className="ui button" type="submit">{this.props.submitButtonTitle}</button>
                    <button onClick={reset} className="ui basic button " type="button">Reset Form Todo</button>
                </form>
            </div>
        );
    }
}

const validate = v => {
    const errors = {};
    if(!v.title){
        errors.title = "Title is required"
    } else if(v.title.length < 3){
        errors.title = "Title should be longer than 3 letters"
    }
    if(!v.date){
        errors.date = "set end date for the task"
    }
    return errors;
}
const warn = v => {
    const warns = {};
    if(!v.description || v.description.length < 5){
        warns.description = "adding better description makes your task understandable"
    }
    return warns;
}

export default TodoForm = reduxForm({
    form: 'new Todo',
    validate,
    warn
})(TodoForm);
