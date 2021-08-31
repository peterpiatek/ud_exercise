import React, {useState, useEffect} from 'react';

const VideoItem = ({title, thumbUrl, videoID}) => {

    const [selectedVideo, setSelectedVideo] = useState('');

    const videoItemClick = (videoID) => {
        console.log(videoID);
        const event = new CustomEvent('playVideo', {detail: videoID}, false)
        window.dispatchEvent(event);
    }

    return (
        <div className="item"
             onClick={() => videoItemClick(videoID)}
            style={{cursor: 'pointer'}}>
            <div className="ui tiny image">
                <img src={thumbUrl} alt={title}/>
            </div>
            <div className="middle aligned content">
                <h5 className="ui header">{title}</h5>
            </div>
        </div>
    );
};

export default VideoItem;
