import React from 'react';

const SongDetails = ({showSong}) => {
    return (
        <div className="ui list">
            <div className="item" style={{marginBottom: '32px'}}>
                <div className="content">
                    <h2 className="header">{showSong.title}</h2>
                    <div className="description">{ showSong.length }</div>
                </div>
            </div>
        </div>

    );
};

export default SongDetails;
