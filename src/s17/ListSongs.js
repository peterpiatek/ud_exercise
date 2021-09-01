import React from 'react';

const ListSongs = ({songs, selectedSong}) => {

    const generateList = () => {
        return songs.map( ({id, title, length}) => {
            return (
                <a key={id} onClick={e => selectedSong(id)} href="#" style={{marginBottom: '32px'}}>
                    <h2 style={{margin: '0'}}>{title}</h2><br/>
                </a>
            );
        })
    }

    return (
        <div>
            {generateList()}
        </div>
    );
};

export default ListSongs;
