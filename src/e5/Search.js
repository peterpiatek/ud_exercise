import React from 'react';

const Search = ({userInput, onSearch}) => {

    const onSearchInput = (term) => {
        onSearch(term);
    }

    return (
        <form className="ui form">
            <div className="field">
                <label>Search for...</label>
                <input
                    value={userInput}
                    onChange={(e) => {onSearchInput(e.target.value)}}
                    type="text"
                    name="Search-field"
                    placeholder="Search for..."/>
            </div>
        </form>
    );
};

export default Search;