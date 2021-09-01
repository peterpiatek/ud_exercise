import React, {useState} from 'react';

const SearchBar = ({onSubmit}) => {

    const [userInput, setUserInput] = useState('');

    const onUserInput = (e) => {
        e.preventDefault();
        onSubmit(userInput);
    };

    return (
        <div className={'search-bar ui segment'}>
            <form className={'ui form'} onSubmit={e => onUserInput(e)}>
                <div className="field">
                    <label>Find anything...</label>
                    <input value={userInput} type="text"
                           onChange={e => setUserInput(e.target.value)}/>
                </div>
                <button className={'ui button'} type={'submit'}>Find</button>
            </form>
        </div>
    );

}

export default SearchBar;
