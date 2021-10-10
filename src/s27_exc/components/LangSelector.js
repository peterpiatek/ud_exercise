import React, {useContext} from 'react';
import LangContext from "../context/LangContext";

const LangSelector = (props) => {

    const lang = useContext(LangContext);

    return (
        <div>
            <h4>Select Language</h4>
            <div>
                <i onClick={() => lang.setLang('pl')} className="flag pl"/>
                <i onClick={() => lang.setLang('uk')} className="flag uk"/>
            </div>
        </div>
    );
};

export default LangSelector;
