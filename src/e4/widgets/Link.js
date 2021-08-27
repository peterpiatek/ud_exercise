import React from 'react';

const Link = ({children, loc, css}) => {

    const onLinkClick = (e, link) => {

        // enabling on links ctrl + mouse click to open in new tab
        if(e.metaKey || e.ctrlKey){
            return;
        }

        e.preventDefault();
        window.history.pushState({}, '', link);
        //pushing event to Router components in App
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a
            className={css}
            onClick={(e) => {onLinkClick(e, loc)}}
            href={loc}>
            {children}
        </a>
    );
};

export default Link;