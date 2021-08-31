import React, {useState} from 'react';
import Link from "./Link";

const Header = ({links}) => {

    const [selected, setSelected] = useState('');

    console.log(selected);

    const generateLinks = () => {
        return links.map(link => {
            const activeLink = selected === link.path ? 'active' : '';
            return (
                <Link
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
