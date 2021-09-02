import { combineReducers } from "redux";

export const songsReducer = () => {
    return [
        {id: 1, title: 'I wish I could fly', length: '3:28'},
        {id: 2, title: 'Thrill , kill me', length: '4:12'},
        {id: 3, title: 'Sometime ago I knew', length: '5:06'}
    ];
}

export const selectedSongsReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongsReducer
})
