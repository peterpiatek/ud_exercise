import React from 'react';
import {connect} from "react-redux";

const SongDetails = ({selectedSong}) => {

    if(!selectedSong){
        return <div>Please select a song</div>
    }

    return (
        <div className="">
            <h2>{selectedSong.title}</h2>
            <h5>{selectedSong.length}</h5>
        </div>
    );
};

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(SongDetails);
