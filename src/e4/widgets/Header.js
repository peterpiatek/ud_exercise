import React, {useState} from 'react';
import Link from "./Link";

const Header = () => {

    const [selectedNavLink, setSelectedNavLink] = useState('/');

    const navLinks = [
        {loc: '/', anchor: 'Home'},
        {loc: '/list', anchor: 'List'},
        {loc: '/dropdown', anchor: 'Dropdown'},
        {loc: '/translate', anchor: 'Translate'},
    ]
    const setActiveLink = (e, link) => {
        e.preventDefault();
        window.location.pathname = link.loc;
        setSelectedNavLink(link);
    }

    const generateNavLinks = () => {
        return navLinks.map(link => {
            const isActive = link.loc === selectedNavLink.loc ? 'active' : '';
            return <Link loc={link.loc} css={`item ${isActive}`} >{link.anchor}</Link>
        })
    }

    return (
        <div className="ui four item menu">
            {generateNavLinks()}
        </div>
    );
};

export default Header;