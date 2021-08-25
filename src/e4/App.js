import React,{useState} from 'react';
// import Accordion from "./widgets/accordion/Accordion";
import './App.css';
import Dropdown from "./widgets/dropdown/Dropdown";
// import Search from "./Search";
// import SearchWikipedia from "./widgets/search/SearchWikipedia";

const App = () => {

    /*const accordionItems = [
        {title: 'martin - lesson 1', description: ' this is lesson 1 description'},
        {title: 'lesson 2 - john', description: 'this is lesson 2 description and nothing else - john'},
        {title: 'jake - lesson 3 longer', description: 'this is lesson 3 description this is lesson 3 description this is lesson 3 description this is lesson 3 description '}
    ]*/
    const dropdownOptions = [
        {val: 'red', title: 'Color Red'},
        {val: 'green', title: 'Color Green'},
        {val: 'blue', title: 'Color Blue'},
    ];

    const [selected, setSelected] = useState(dropdownOptions[0]);

    return (
        <div>
            {/*<SearchWikipedia />*/}
            {/*<Accordion items={accordionItems} />*/}
            <Dropdown onSelectedChange={setSelected} selected={selected} options={dropdownOptions} />
        </div>
    );
};

export default App;