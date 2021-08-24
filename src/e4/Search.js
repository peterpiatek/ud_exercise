import React, {useState} from 'react';

const Search = ({items}) => {

    const [userInput, setUserInput] = useState('');

    const onUserInput = (e) => {
        setUserInput(e.target.value);
    }

    const showSearchResults = () => {
        return items.map((item, index) => {
        const isFound = item.title.search(userInput);
        const isFoundClass = isFound !== -1 ? 'is-found' : '';
            return (
                <div key={index} className={`s-result ${isFoundClass}`}>
                    <div className="s-results-title">{item.title}</div>
                    <div className="s-results-desc">{item.description}</div>
                </div>
            );
        })
    };

    return (
        <div className={'ui container'}>
            <form className="ui form">
                <div className="field">
                    <label>Search the list</label>
                    <input value={userInput} type="text" name="search-the-list" placeholder="Search The List"
                           onChange={onUserInput}/>
                </div>
            </form>
            <br/>
            <h2>Search Results:</h2>
            <div className={'search-results'}>
                {showSearchResults()}
            </div>
        </div>
    );
};

export default Search;