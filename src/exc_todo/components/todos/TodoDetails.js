import React from 'react';
import {connect} from "react-redux";
import {fetchTodo} from "../../actions";

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
        if (this.props.isSignedIn && this.props.currentUser === this.props.todo.userId){
            return (
                <div style={{marginTop: '24px', maxWidth: '250px'}} className="three ui buttons">
                    <button className="ui button small green">Done</button>
                    <button className="ui button small">Edit</button>
                    <button className="ui button small">Delete</button>
                </div>
            );
        }
    }

    render () {
        if(!this.props?.todo){
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

export default connect(mapStateToProps, {fetchTodo})(TodoDetails);
