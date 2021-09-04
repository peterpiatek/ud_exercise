import React, {Component} from 'react';
import {connect} from "react-redux";
import {addUser} from "../actions";

class AddUser extends Component {

    state = {
        userName: '',
        userAge: '',
        userPermissions: '',
    }

    generateUsers = () => {
        return this.props.users.map(user => {
            return (
                <div key={user.name}>
                    <h3>{user.name}</h3>
                    <h5>{user.age}</h5>
                    <h6>{user.permissions}</h6>
                </div>
            );
        })
    }

    onAdduser = (e) => {
        e.preventDefault();
        this.props.addUser({
            name: this.state.userName,
            age: this.state.userAge,
            permissions: this.state.userPermissions
        })
    }

    render() {
        return (
            <div>
                <div style={{maxWidth: '450px'}}>
                    <form className="ui form">
                        <h4 className="ui dividing header">Add New User</h4>
                        <div className="field">
                            <label>Name</label>
                            <div className="three fields">
                                <div className="field">
                                    <input
                                        value={this.state.userName || ''}
                                        onChange={e => {
                                            this.setState({userName: e.target.value})
                                        }}
                                        type="text" name="" placeholder="Name"/>
                                </div>
                                {<div className="field">
                                    <input
                                        value={this.state.userAge || ''}
                                        onChange={e => {
                                            this.setState({userAge: e.target.value})
                                        }}
                                        type="text" name="" placeholder="Age"/>
                                </div>}
                                {<div className="field">
                                    <label>State</label>
                                    <select
                                        value={this.state.userPermissions || ''}
                                        onChange={e => {
                                            this.setState({userPermissions: e.target.value})
                                        }}
                                        className="ui fluid dropdown">
                                        <option value="admin">Admin</option>
                                        <option value="editor">Editor</option>
                                        <option value="viewer">Viewer</option>
                                    </select>
                                </div>}
                            </div>

                        </div>
                        <button onClick={e => {this.onAdduser(e)}} className="ui submit button">Submit
                        </button>
                    </form>
                </div>
                <br/>
                <div>
                    Users:
                    {this.generateUsers()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return state;
}

export default connect(mapStateToProps, {addUser})(AddUser);
