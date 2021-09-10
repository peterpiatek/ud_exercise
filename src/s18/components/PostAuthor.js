import React, {Component} from 'react';
import {connect} from "react-redux";
import _ from "lodash";

class PostAuthor extends Component {

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
    return {user: _.find(state.users, ['id', ownProps.userId])}
}

export default connect(mapStateToProps)(PostAuthor);
