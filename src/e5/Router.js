import React, {useEffect, useState} from 'react';

const Router = ({path, children}) => {

    const [pathUrl, setPathUrl] = useState(window.location.pathname);

    const popstateHandler = (e) => {
        setPathUrl(window.location.pathname);
    }

    useEffect(() => {
        window.addEventListener('popstate', popstateHandler, {capture: true});
        return () => {
            window.removeEventListener('popstate', popstateHandler, {capture: true})
        }
    }, []);

    return (
        <React.Fragment>
            { pathUrl === path ? children : '' }
        </React.Fragment>
    );
};

export default Router;
