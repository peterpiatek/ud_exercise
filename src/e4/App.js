import React,{useState} from 'react';
import './App.css';
import Dropdown from "./widgets/dropdown/Dropdown";
import Translate from "./widgets/translate/Translate";
import Accordion from "./widgets/accordion/Accordion";
import Search from "./widgets/search/SearchWikipedia";
import Router from "./widgets/Router";
import Header from "./widgets/Header";

const App = () => {

    const accordionItems = [
        {title: 'martin - lesson 1', description: ' this is lesson 1 description'},
        {title: 'lesson 2 - john', description: 'this is lesson 2 description and nothing else - john'},
        {title: 'jake - lesson 3 longer', description: 'this is lesson 3 description this is lesson 3 description this is lesson 3 description this is lesson 3 description '}
    ]

    const dropdownOptions = [
        {val: 'red', title: 'Color Red'},
        {val: 'green', title: 'Color Green'},
        {val: 'blue', title: 'Color Blue'},
    ];

    const [selected, setSelected] = useState(dropdownOptions[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Header />
            <Router path="/">
                <Accordion items={accordionItems}/>
            </Router>
            <Router path="/list">
                <Search />
            </Router>
            <Router path="/dropdown">
                <Dropdown onSelectedChange={setSelected} options={dropdownOptions} selected={selected} formTitle={'Select'}/>
            </Router>
            <Router path="/translate">
                <Translate />
            </Router>

        </div>
    );
};

export default App;