import React, {useState} from 'react';
import ListSongs from "./ListSongs";
import SongDetails from "./SongDetails";

const App = () => {

    const songs = [
        {id: 1, title: 'I wish I could fly', length: '3:28'},
        {id: 2, title: 'Thrill , kill me', length: '4:12'},
        {id: 3, title: 'Sometime ago I knew', length: '5:06'},
    ]

    const [currentSong, setCurrentSong] = useState(1);

    const selectedSong = (songId) => {
        setCurrentSong(songId);
    }

    const getCurrentSong = () => {
        return songs.filter(song => {
            return song.id === currentSong;
        })
    }

    return (
        <div style={{display: 'flex'}}>
            <div style={{flex: '0 1 50%' }}>
                <ListSongs songs={songs} selectedSong={selectedSong}/>
            </div>
            <div style={{flex: '0 1 50%' }}>
                <SongDetails showSong={getCurrentSong()} />
            </div>
        </div>
    );
}

export default App;
