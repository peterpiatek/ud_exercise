import React, {useContext} from 'react';
import LangContext from "../../s27_exc/context/LangContext";

const Field = props => {
    const context = useContext(LangContext);

    const setUserName = () => {
        return context.lang === 'pl' ? 'Nazwa uzytkownika' : 'User Name';
    }

    return (
        <div className="ui form" style={props.css}>
            <div className="field">
                <label>{setUserName()}</label>
                <input type="text"/>
            </div>
        </div>
    );
};

export default Field;
