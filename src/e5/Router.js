import React from 'react';

const Router = ({path, children}) => {

    return (
        <React.Fragment>
            { window.location.pathname === path ? children : '' }
        </React.Fragment>
    );
};

export default Router;