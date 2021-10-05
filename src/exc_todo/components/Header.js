import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import GoogleAuth from "./GoogleAuth";
import {connect} from "react-redux";

const Header = (props) => {

    const renderUserProfile = () => {
        if(props.userProfile){
            return (
                <div className="header-user-account">
                    <img src={props.userProfile.imageUrl} alt=""/>
                    <h4>{props.userProfile.name}</h4>
                </div>
            );
        } else {
            return (
                <div className="header-user-account">
                    <div className="ui placeholder header-avatar">
                        <div className="image">
                        </div>
                    </div>
                    <h4>Please Log In</h4>
                </div>
            );
        }
    }

    return (
        <div>
            <div className="ui secondary menu" style={{marginTop: '24px'}}>
                <Link className="item" to="/"><strong style={{fontSize: '1.2rem'}}>TODOIST</strong></Link>
                <div className="right menu">
                    <div className="item">
                        <Link to="" className="ui basic button">
                            <i className="icon plus square outline"/>
                            Add Todo
                        </Link>
                    </div>
                    <div className="item">
                        <GoogleAuth />
                    </div>
                </div>
            </div>
            {renderUserProfile()}
        </div>
    );
}

const mapStatetoProps = state => {
    console.log(state.auth.profile);
    return {
        userProfile: state.auth.profile
    }
}

export default connect(mapStatetoProps)(Header);
