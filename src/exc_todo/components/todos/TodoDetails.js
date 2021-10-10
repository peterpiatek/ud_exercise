import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {deleteTodo, editTodo, fetchTodo} from "../../actions";
import {Link} from "react-router-dom";

const TodoDetails = (props) => {

    useEffect(()=> {
        props.fetchTodo(props.match.params.id);
    }, []);

    const renderDetails = () => {
        const {title, description, date} = props.todo;
        return (
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <span>{date}</span>
            </div>
        );
    }

    const renderAdmin = () => {
        if (props.isSignedIn && props.currentUser === props.todo.userId) {
            return (
                <div style={{marginTop: '24px', maxWidth: '250px'}} className="three ui buttons">
                    <button onClick={() => todoDoneUpdate(props.todo)} className={`ui button mini ${!props.todo.status && 'green'}`}>{(props.todo.status && 'Undo') || 'Done'}</button>
                    <Link to={`/todo/edit/${props.todo.id}`} className="ui button mini">Edit</Link>
                    <button className="ui button mini orange">Delete</button>
                </div>
            );
        }
    }

    const todoDoneUpdate = (todo) => {
        todo.status = !todo.status
        props.editTodo(todo);
    }

    if (!props?.todo) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div>{renderDetails()}</div>
            <div>{renderAdmin()}</div>
        </div>

    );
}

const mapStateToProps = (state, getProps) => {
    return {
        todo: state.todos[getProps.match.params.id],
        isSignedIn: state.auth.isSignedIn,
        currentUser: state.auth?.profile?.userId
    }
}

export default connect(mapStateToProps, {fetchTodo, deleteTodo, editTodo})(TodoDetails);
