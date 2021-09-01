import React from 'react';
import {VideoItem} from "./VideoItem";

const VideosList = ({videos, onVideoSelect}) => {

    const onVideoItemSelect = (video) => {
        onVideoSelect(video);
    }

    const showVideosList = () => {
        if (videos.length > 0) {
            return videos.map(video => {
                return <VideoItem onVideoItemSelect={onVideoItemSelect} key={video.id.videoId} video={video}/>
            })
        }
    }

    return (
        <div className={'ui items'}>
            {showVideosList()}
        </div>
    );
};

export default VideosList;