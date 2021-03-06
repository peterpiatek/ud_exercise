import React, {useState} from 'react';
import Link from "./Link";

const Header = ({links}) => {

    const [selected, setSelected] = useState('');

    const generateLinks = () => {
        return links.map(link => {
            const activeLink = selected === link.path ? 'active' : '';
            return (
                <Link
                    key={link.title}
                    selected={activeLink}
                    onLinkClick={(path) => {setSelected(path)}}
                    path={link.path}
                    title={link.title} />
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
