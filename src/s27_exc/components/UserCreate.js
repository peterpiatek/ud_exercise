import React, {useContext} from 'react';
import Field from "./Field";
import ThemeOptions from "../context/ThemeOptions";
import LangContext from "../context/LangContext";

const UserCreate = props => {

    const renderFormTitle = () => {
        return (
            <LangContext.Consumer>
                {context => {
                    return context.lang === 'pl' ? <h1>Nowy uzytkownik</h1> : <h1>New User</h1>
                }}
            </LangContext.Consumer>
        );
    }

    return (
        <ThemeOptions.Consumer>
            {(value) => {
                return (
                    <div>
                        {renderFormTitle()}
                        <Field css={value}/>
                    </div>
                );
            }}
        </ThemeOptions.Consumer>
    );
};

export default UserCreate;
