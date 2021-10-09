import React from 'react';
import {connect} from "react-redux";
import {deleteTodo, editTodo, fetchTodos} from "../../actions";
import {Link} from "react-router-dom";
import Modal from "../Modal";

class TodoList extends React.Component {

    state = {
        modalState: 'active',
        todoToDelete: null
    }

    componentDidMount() {
        this.props.fetchTodos();
    }

    renderAdmin = (todo) => {
        if (this.props.isSignedIn && (this.props.currentUser === todo.userId)) {
            return (
                <div>
                    <button onClick={() => this.todoDoneUpdate(todo)} className={`ui button mini ${!todo.status && 'green'}`}>{(todo.status && 'Undo') || 'Done'}</button>
                    <Link to={`/todo/edit/${todo.id}`} className="ui button mini basic"><i className="icon pencil alternate"/></Link>
                    <button onClick={() => {this.setState({todoToDelete: todo, modalState: 'active'})}} className="ui button mini basic orange">X</button>
                </div>
            );
        }
    }

    renderStreamCreate = () => this.props.isSignedIn && <Link className="ui button primary" to="/todo/new" >Add new Todo</Link>;

    renderList = () => {
        return this.props.todos.map(todo => {
            return (
                <div key={todo.id} className="item">
                    <div className="right floated content">
                        {this.renderAdmin(todo)}
                    </div>
                    <i className="icon pencil alternate large middle aligned"/>
                    <div className="content">
                        <Link to={`/todo/details/${todo.id}`} className="header">{todo.title}</Link>
                    </div>
                </div>

            );
        })
    }

    showModal = () => {
        const {todoToDelete} = this.state;
        if(todoToDelete){
            return <Modal
                active={this.state.modalState}
                title="Are you sure you want to delete this todo?"
                subtitle={todoToDelete.title}
                onDismiss={this.dismissModal}
                actions={this.renderModalActions(todoToDelete.id)}
            />
        }
    }

    dismissModal = () => {
        this.setState({todoToDelete: null, modalState: ''})
    }

    renderModalActions = (id) => {
        const onDeleteClick = () => {
            this.props.deleteTodo(id)
            // this.props.fetchTodos();
            this.dismissModal();
        }
        return (
            <React.Fragment>
                <div onClick={onDeleteClick} className="ui button red">Delete</div>
                <div onClick={this.dismissModal} className="ui button">Cancel</div>
            </React.Fragment>
        );
    }

    todoDoneUpdate = (todo) => {
        todo.status = !todo.status
        this.props.editTodo(todo);
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.showModal()}
                {this.renderList()}
                {this.renderStreamCreate()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const userId = state.auth?.profile?.userId;
    return {
        todos: Object.values(state.todos),
        currentUser: userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {fetchTodos, deleteTodo, editTodo: editTodo})(TodoList);
