import {useEffect, useState} from "react";

const Router = ({path, children}) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const popEventHandler = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate', popEventHandler, {capture: true})

        return () => {
            window.removeEventListener('popstate', popEventHandler, {capture: true})
        }
    }, []);

    return currentPath === path
        ? children
        : null
};

export default Router;