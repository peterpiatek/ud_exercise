import React, {useState} from 'react';

const Context = React.createContext('pl');

export const LangStore = props => {
    const [lang, setLang] = useState('pl');

    return (
        <Context.Provider value={{lang, setLang}} >
            {props.children}
        </Context.Provider>
    );
}

export default Context;
