import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import GoogleAuth from "./GoogleAuth";

const Header = () => {
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
            <div className="header-user-account">
                <div className="ui placeholder header-avatar">
                    <div className="image"> </div>
                </div>
                <h4>User Name</h4>
            </div>
        </div>
    );
}

export default Header;
