import React from 'react';

const SongDetails = ({showSong}) => {
    return (
        <div>
            <h3>{showSong[0].title}</h3>
            <h4>{showSong[0].length}</h4>
        </div>
    );
};

export default SongDetails;
