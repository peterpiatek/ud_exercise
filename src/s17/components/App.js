import React, {useState} from 'react';
// import ListSongs from "./ListSongs";
// import SongDetails from "./SongDetails";
import './App.css';
import ListSongs from "./ListSongs";

// import {selectSong} from "../actions";

const App = () => {

    return (
        <div>
            <ListSongs/>
        </div>
    );

    /*const [currentSong, setCurrentSong] = useState(1);

    const selectedSong = (songId) => {
        setCurrentSong(songId);
    }

    const getCurrentSong = () => {
        return songs.filter(song => {
            console.log(song);
            return song.id === currentSong;
        })[0]; //extract from array
    }

    return (
        <div className="ui container" style={{display: 'flex', marginTop: '36px'}}>
            <div style={{flex: '0 1 50%' }}>
                <ListSongs songs={songs} selectedSong={selectedSong}/>
            </div>
            <div style={{flex: '0 1 50%' }}>
                <SongDetails showSong={getCurrentSong()} />
            </div>
        </div>
    );*/
}

export default App;
