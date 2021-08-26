import React, {useState} from 'react';
import Dropdown from "../dropdown/Dropdown";
import Convert from "./Convert";

const Translate = () => {

    const langOptions = [
        {val: 'pl', title: 'Polish'},
        {val: 'es', title: 'Spanish'},
        {val: 'ru', title: 'Russian'},
        {val: 'hi', title: 'Hindi'},
    ];

    const [language, setLanguage] = useState(langOptions[0]);
    const [userInput, setUserInput] = useState('');

    const onSelectedLang = (lang) => {
        setLanguage(lang);
    }

    return (
        <div className="container ui" style={{marginTop: '36px', backgroundColor: '#bada55', padding: '24px'}}>
            <div className="ui form">
                <div className="field">
                    <label>Translate text:</label>
                    <input type="text" value={userInput} onChange={e => {
                        setUserInput(e.target.value)
                    }} placeholder="Search..."/>
                </div>
            </div>
            <br/><br/>
            <Dropdown onSelectedChange={onSelectedLang} options={langOptions} selected={language}
                      formTitle={'Select Language'}/>
            <br/>
            <h3>Result:</h3>
            <div>
                <Convert translateText={userInput} lang={language} />
            </div>
        </div>
    );
};

export default Translate;