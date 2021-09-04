import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {

    const [userInput, setUserInput] = useState('program');
    const [debounceUserInput, setDebounceUserInput] = useState(userInput);
    const [resData, setResData] = useState([]);

    const onUserInput = (e) => {
        setUserInput(e.target.value);
    }

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceUserInput(userInput);
        }, 500)
        return () => {
            clearTimeout(timerId);
        }
    }, [userInput])

    useEffect(() => {
        const axiosConfig = {
            baseURL: 'https://en.wikipedia.org/w/api.php',
            timeout: 1000,
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: debounceUserInput
            }
        }

        const search = async () => {
            console.log('dbsearch ' + debounceUserInput);
            const {data} = await axios.get('', axiosConfig);
            setResData(data.query.search);
        }
        if (debounceUserInput) {
            search();
        }

    }, [debounceUserInput])

    //initial fetch functions - moved to useEffect
    /*const fetchWikipedia = axios.create({
        baseURL: 'https://en.wikipedia.org/w/api.php',
        timeout: 1000,
        params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json'
        }
    });

    const fetchWikipediaRes = async () => {
        console.log('fetch');
        const res = await fetchWikipedia.get('', {
            params: {
                srsearch: userInput
            }
        });
        setResData(res.data.query.search);
    }*/


    //replaced by useeffect created to deal with too many apis requests because of added resData.length to useEffect dependency array due to js console error (and best practice). Above solution use debounce variable
    /*useEffect(() => {

        const axiosConfig = {
            baseURL: 'https://en.wikipedia.org/w/api.php',
            timeout: 1000,
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: userInput
            }
        }

        let timeoutId;

        const search = async () => {
            const {data} = await axios.get('', axiosConfig).catch(err => console.log(err));
            setResData(data.query.search);
        }
        //the issue: resData used to decide about initial API req needs to be added to dependency array to avoid other issues
        //because of that the useEffect invokes API request twice - because after data arrival array length is changing and code is executed again - timeout fn is triggered and API req is made again
        //to deal with this problem debounced var in useState is introduced which omits resData.length to be added to useEffect dependency Array
        if (userInput && !resData.length) {
            console.log('in');
            search();
        } else if (userInput) {
            timeoutId = setTimeout(() => {
                // setDebounceResData(userInput);
                search();
            }, 500);

            //cleanup fn
            return () => {
                clearTimeout(timeoutId);
            }
        }

        //optional way of IIFE function for async await
        /!*(async () => {
           console.log('APICall');
           const {data} = await axios.get('', axiosConfig)
           setResData(data.query.search);
        })();*!/

    }, [userInput, resData.length]);*/


    const showSearchResults = () => {
        if (resData.length > 0) {
            return resData.map((res) => {
                // const isFoundClass = '';
                return (
                    <div key={res.pageid} className="s-result">
                        <div className="s-results-title">{res.title}</div>
                        <div className="s-results-desc">{res.snippet}</div>
                        <a rel="noreferrer" target="_blank" href={`https://en.wikipedia.org?curid=${res.pageid}`}
                           className="s-results-btn">Show</a>
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
