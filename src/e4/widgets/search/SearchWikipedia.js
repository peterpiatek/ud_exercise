import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {

    const [userInput, setUserInput] = useState('');
    const [resData, setResData] = useState(null);

    const onUserInput = (e) => {
        setUserInput(e.target.value);
    }

    const fetchWikipedia = axios.create({
        baseURL: 'https://en.wikipedia.org/w/rest.php/v1/search/page',
        timeout: 1000,
        params: {
            limit: '10'
        }
    });

    const fetchWikipediaRes = async () => {
        console.log('fetch');
        const res = await fetchWikipedia.get('', {
            params: {
                q: 'jupiter'
            }
        })
        setResData(res.data);
    }

    useEffect(()=>{
        console.log('invoke');
        // fetchWikipediaRes();
    })

    //use component did mount in functions

    const showSearchResults = () => {

        if(resData !== null){
            console.log(resData);
            return resData.pages.map(page => {
                /*const isFound = item.title.search(userInput);
                const isFoundClass = isFound !== -1 ? 'is-found' : '';*/
                const isFoundClass = '';
                return (
                    <div key={page.id} className={`s-result ${isFoundClass}`}>
                        <div className="s-results-title">{page.title}</div>
                        <div className="s-results-desc">{page.description}</div>
                    </div>
                );
            })
        }

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