import React, {Component} from 'react';
import {Link} from "react-router-dom";

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('auth2', async () => {
            this.auth = await window.gapi.auth2.init({
                clientId: '857744595856-hjm0f2e0qk64elb9cf7nffgnagn696a4.apps.googleusercontent.com'
            })
            this.onSignInStatusChange(this.auth.isSignedIn.get());
        })
    }

    onSignInStatusChange = (status) => {
        if(!status){
            return 'Sign In'
        } else {
            return 'Sign Out'
        }
    }

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderButtons = () => {
        if(this.auth.isSignedIn.get()){
            return (
                <Link onClick={this.onSignIn()} className="ui primary button">
                    <i className="icon google"/>
                    Sign In
                </Link>
            );
        } else {
            return (
                <Link onClick={this.onSignOut()} className="ui primary button">
                    <i className="icon google"/>
                    Sign Out
                </Link>
            );
        }
    }

    render (){
        return (
            <div>
                {this.renderButtons()}
            </div>
        );
    }

}

export default GoogleAuth;
