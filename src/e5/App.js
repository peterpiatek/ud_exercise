import React, {useState, useEffect} from 'react';
import './App.css';
import Search from "./Search";
import fetchVideos from './Youtube';
import VideoList from "./VideoList";
import Player from "./Player";
import Router from "./Router";
import Header from './Header';

const App = () => {

    const [userInput, setUserInput] = useState('');
    const [searchRes, setSearchRes] = useState([]);

    const onSearchInput = (term) => {
        setUserInput(term);
    }

    const links = [
        {title: 'View 1', path: '/view1'},
        {title: 'View 2', path: '/view2'},
    ];

    useEffect(() => {
        const search = async () => {
            const res = await fetchVideos.get('', {
                params: {q: userInput}
            });
            setSearchRes(res.data.items);
            console.log(res.data.items);
        }
        const timer = setTimeout(() => {
            if (userInput) {
                search();
            }
        }, 700);

        return () => {
            clearTimeout(timer);
        }

    }, [userInput]);

    return (
        <div>
            <Header links={links} />
            <Router path="/view1">
                <div className="ui grid container">
                    <div className="sixteen wide column" style={{marginTop: '16px'}}>
                        <Search userInput={userInput} onSearch={onSearchInput}/>
                    </div>
                    <div className="eleven wide column">
                        <Player/>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={searchRes}/>
                    </div>
                </div>
            </Router>
            <Router path="/view2">
                <div className="ui grid container">
                    <div className="sixteen wide column" style={{marginTop: '16px'}}>
                        <Search userInput={userInput} onSearch={onSearchInput}/>
                    </div>
                    <div className="sixteen wide column">
                        <Player/>
                    </div>
                    <div className="sixteen wide column">
                        <VideoList videos={searchRes}/>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default App;