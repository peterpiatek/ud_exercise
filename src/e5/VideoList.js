import React from 'react';
import VideoItem from "./VideoItem";

const VideoList = ({videos}) => {

    const generateList = () => {
        return videos.map(video => {
            return (
                <div className="ui items">
                    <VideoItem
                        videoID = {video.id.videoId}
                        title={video.snippet.title}
                        thumbUrl={video.snippet.thumbnails.default.url} />
                </div>
            );
        })
    }

    return (
        <div>
            {generateList()}
        </div>
    );
}

export default VideoList;