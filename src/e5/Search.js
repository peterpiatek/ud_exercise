import React from 'react';

const Search = ({userInput, onSearch}) => {

    const onSearchInput = (term) => {
        onSearch(term);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={e => {onFormSubmit(e)}} className="ui form">
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
