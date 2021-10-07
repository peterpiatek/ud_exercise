import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {todoNew} from "../../actions";

class TodoNew extends Component {
    //title, desc, end date

    onFormSubmit = (form) => {
        console.log(form);
        this.props.todoNew(form);
    }

    renderInput = ({input, label, meta: {touched, error, warning}}) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        );
    }

    render () {
        const {handleSubmit} = this.props;
        return (
            <form className="ui form" onSubmit={handleSubmit(this.onFormSubmit)}>
                <Field name="title" label="Title" component={this.renderInput} type="text" />
                <Field name="description" label="Description" component={this.renderInput} type="text" />
                <Field name="date" label="End Date" component={this.renderInput} type="date" />

                <button className="ui button" type="submit">Create new Todo</button>
            </form>
        );
    }
}

const validate = v => {
    const errors = {};
    if(!v.title){
        errors.title = "Title is required"
    } else if(v.title.length < 3){
        errors.title = "Title should be longet than 3 letters"
    }
    if(!v.date){
        errors.date = "set end date for the task"
    }
    return errors;
}
const warn = v => {
    const warns = {};
    if(!v.description || v.description.length < 5){
        warns.description = "addind better description makes your task understandable"
    }
    return warns;
}

TodoNew = reduxForm({
    form: 'new Todo',
    validate,
    warn
})(TodoNew)

export default connect(null, {todoNew})(TodoNew);
