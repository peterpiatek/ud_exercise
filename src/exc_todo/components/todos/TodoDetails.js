import React from 'react';
import {connect} from "react-redux";
import {deleteTodo, editTodo, fetchTodo} from "../../actions";
import {Link} from "react-router-dom";

class TodoDetails extends React.Component {

    componentDidMount() {
        this.props.fetchTodo(this.props.match.params.id);
    }

    renderDetails = () => {
        const {title, description, date} = this.props.todo;
        return (
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <span>{date}</span>
            </div>
        );
    }

    renderAdmin = () => {
        if (this.props.isSignedIn && this.props.currentUser === this.props.todo.userId) {
            return (
                <div style={{marginTop: '24px', maxWidth: '250px'}} className="three ui buttons">
                    <button onClick={() => this.todoDoneUpdate(this.props.todo)} className={`ui button mini ${!this.props.todo.status && 'green'}`}>{(this.props.todo.status && 'Undo') || 'Done'}</button>
                    <Link to={`/todo/edit/${this.props.todo.id}`} className="ui button mini">Edit</Link>
                    <button onClick={() => {this.setState({todoToDelete: this.props.todo, modalState: 'active'})}} className="ui button mini orange">Delete</button>
                </div>
            );
        }
    }

    todoDoneUpdate = (todo) => {
        todo.status = !todo.status
        this.props.editTodo(todo);
    }

    render() {
        if (!this.props?.todo) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <div>{this.renderDetails()}</div>
                <div>{this.renderAdmin()}</div>
            </div>

        );
    }
}

const mapStateToProps = (state, getProps) => {
    return {
        todo: state.todos[getProps.match.params.id],
        isSignedIn: state.auth.isSignedIn,
        currentUser: state.auth?.profile?.userId
    }
}

export default connect(mapStateToProps, {fetchTodo, deleteTodo, editTodo})(TodoDetails);
