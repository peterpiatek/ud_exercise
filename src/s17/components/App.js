import React, {useState} from 'react';
import './App.css';
import ListSongs from "./ListSongs";
import SongDetails from "./SongDetails";

const App = () => {

    return (
        <div className="ui grid" style={{margin: '24px'}}>
            <div className="six wide column">
                <ListSongs />
            </div>
            <div className="ten wide column">
                <SongDetails />
            </div>
        </div>
    );
}

export default App;
