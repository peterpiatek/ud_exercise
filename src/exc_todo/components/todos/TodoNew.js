import React, {Component} from 'react';
import {connect} from "react-redux";
import {todoNew} from "../../actions";
import TodoForm from "./TodoForm";

class TodoNew extends Component {
    //title, desc, end date

    onFormSubmit = (form) => {
        this.props.todoNew(form);
    }

    render() {
        return (
            <TodoForm
                formTitle="Add New Todo"
                onFormSubmit={this.onFormSubmit}
                submitButtonTitle="Save todo"
            />
        );
    }
}

export default connect(null, {todoNew})(TodoNew);
