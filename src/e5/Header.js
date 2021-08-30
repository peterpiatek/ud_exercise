import React from 'react';

const Header = ({links}) => {

    //@todo: create link component
    //@todo: move linkclick to new component
    const linkClick = (e, link) => {
        e.preventDefault()
        window.history.pushState({}, '', link.path);

        const event = new Event('popstate');

    };

    const generateLinks = () => {
        return links.map(link => {
            return (
                <a href={link.path} onClick={ (e) => linkClick(e, link)} className="item">
                    {link.title}
                </a>
            );
        })
    }

    return (
        <div className="ui two item menu">
            {generateLinks()}
        </div>
    );
};

export default Header;