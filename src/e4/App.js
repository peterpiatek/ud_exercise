import React from 'react';
import Accordion from "./widgets/accordion/Accordion";
import './App.css';
import Search from "./Search";
import SearchWikipedia from "./widgets/search/SearchWikipedia";

const App = () => {

    const accordionItems = [
        {title: 'martin - lesson 1', description: ' this is lesson 1 description'},
        {title: 'lesson 2 - john', description: 'this is lesson 2 description and nothing else - john'},
        {title: 'jake - lesson 3 longer', description: 'this is lesson 3 description this is lesson 3 description this is lesson 3 description this is lesson 3 description '}
    ]

    return (
        <div>
            <SearchWikipedia items={accordionItems}/>
            {/*<Accordion items={accordionItems} />*/}
        </div>
    );
};

export default App;