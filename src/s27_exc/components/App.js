import React from 'react';
import UserCreate from "../../s27_exc/components/UserCreate";
import ThemeOptions from "../context/ThemeOptions";
import LangSelector from "./LangSelector";

import {LangStore} from "../context/LangContext";

const App = () => {

    return (
        <div className="ui container">
            <LangStore>
                <LangSelector/>
                <ThemeOptions.Provider value={{color: 'red'}}>
                    <UserCreate/>
                </ThemeOptions.Provider>
            </LangStore>
        </div>
    );
};

export default App;
