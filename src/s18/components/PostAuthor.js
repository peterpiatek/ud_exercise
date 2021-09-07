import React, {Component} from 'react';
import {connect} from "react-redux";
import {getUser} from "../actions";

class PostAuthor extends Component  {
    /*componentDidMount() {
        const fetchedUser = this.props.users.find(user => {
            return user.id === this.props.userId ? user : null
        })
        if(!fetchedUser){
            this.props.getUser(this.props.userId);
        }
    }*/

    render () {
        return (
            <div style={{display: 'flex'}}>
                <span
                    style={{marginRight: '12px'}}>
                    <strong></strong></span> Email:&nbsp;
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.users);
    return {users: state.users};
}

export default connect(mapStateToProps, {getUser})(PostAuthor);
