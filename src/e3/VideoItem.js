import * as React from 'react';

export const VideoItem = ({video, onVideoItemSelect}) => {

    const thumbnail = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    const playVideo = (video) => {
        onVideoItemSelect(video);
    }

    return (
        <div className="video-item item" onClick={() => playVideo(video)}>
            <div className="ui tiny image">
                <img src={thumbnail} alt={title}/>
            </div>
            <div className="middle aligned content">
                <span className="">{title}</span>
            </div>
        </div>
    );
};