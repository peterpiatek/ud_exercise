import React, {Component} from 'react';
import {connect} from "react-redux";
import {signIn, signOut} from "../actions";

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('auth2', async () => {
            this.auth = await window.gapi.auth2.init({
                clientId: '857744595856-hjm0f2e0qk64elb9cf7nffgnagn696a4.apps.googleusercontent.com'
            })
            this.onSignInStatusChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onSignInStatusChange);
        })
    }

    onSignInStatusChange = (status) => {
        if (status) {
            const userData = this.auth.currentUser.get().getBasicProfile();
            const userProfile = {
                name: userData.getName(),
                email: userData.getEmail(),
                imageUrl: userData.getImageUrl()
            }

            this.props.signIn(userProfile);
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderButtons = () => {
        if (!this.props.isSignedIn) {
            return (
                <button onClick={this.onSignInClick} className="ui primary button">
                    <i className="icon google"/>
                    Sign In
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignOutClick} className="ui primary button">
                    <i className="icon google"/>
                    Sign Out
                </button>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderButtons()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}


export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
