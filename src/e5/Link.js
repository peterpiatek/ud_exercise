import React from 'react';

const Link = ({title, path, selected, onLinkClick}) => {

    const linkClick = (e, path) => {
        e.preventDefault()
        window.history.pushState({}, '', path);

        const event = new Event('popstate');
        window.dispatchEvent(event);

        onLinkClick(path);
    };

    return (
        <a
            href={path}
            onClick={ (e) => linkClick(e, path)}
            className={`item ${selected}`}>
            {title}
        </a>
    );
}

export default Link;
