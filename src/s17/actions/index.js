
export const selectSong = song => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}
export const addSong = song => {
    return {
        type: 'SONG_ADD',
        payload: song
    }
}
