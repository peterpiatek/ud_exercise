import React from 'react';
import {connect} from "react-redux";
import {fetchTodos} from "../../actions";
import {Link} from "react-router-dom";

class TodoList extends React.Component {

    componentDidMount() {
        this.props.fetchTodos();
    }

    renderAdmin = (todo) => {
        if (this.props.isSignedIn && (this.props.currentUser === todo.userId)) {
            return (
                <div>
                    <button  className="ui button mini green">Done</button>
                    <Link to={`/todo/edit/${todo.id}`} className="ui button mini">Edit</Link>
                    <button  className="ui button mini">Delete</button>
                </div>
            );
        }
    }

    rednerStreamCreate = () => this.props.isSignedIn && <Link className="ui button primary" to="/todo/new" >Add new Todo</Link>;

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

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
                {this.rednerStreamCreate()}
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

export default connect(mapStateToProps, {fetchTodos})(TodoList);
