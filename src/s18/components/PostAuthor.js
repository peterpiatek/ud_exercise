import React, {Component} from 'react';
import {connect} from "react-redux";
import {getUser} from "../actions";

class PostAuthor extends Component {

    componentDidMount() {
        if (!this.props.user) {
            this.props.getUser(this.props.userId);
        }
    }

    render() {
        const {user} = this.props;
        if (!user) {
            return null;
        }

        return (
            <div style={{display: 'flex'}}>
                <span><strong>{user.name}</strong></span>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)};
}

export default connect(mapStateToProps, {getUser})(PostAuthor);
