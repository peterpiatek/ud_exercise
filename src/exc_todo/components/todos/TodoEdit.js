import React from 'react';
import {connect} from "react-redux";
import {editTodo, fetchTodo} from "../../actions";
import TodoForm from "./TodoForm";

class TodoEdit extends React.Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchTodo(id);
    }

    onFormSubmit = (form) => {
        const {title, description, date, id, status} = form;
        this.props.editTodo({title, description, date, id, status});
    }

    render () {
        return (
            <TodoForm
                formTitle="Edit Todo"
                onFormSubmit={this.onFormSubmit}
                initialValues={this.props.initialValues}
                submitButtonTitle="Save changes"
            />
        );
    }
}

const mapStateToProps = (state, getProps) => {
    return {
        initialValues: state.todos[getProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchTodo, editTodo})(TodoEdit);
